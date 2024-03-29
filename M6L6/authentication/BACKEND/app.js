const express = require('express');
const mongoose = require('mongoose');

const Users = require('./Users');
const Ordini = require('./Ordini');

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors())


//AUTH
const bcrypt = require('bcrypt');
const saltRounds = 10; //n volte da eseguire l'algoritmo (8-10)

const jwt = require("jsonwebtoken");

require('dotenv').config()
// const jwtSecret = "secretWord" //parola segreta per la codifica (la metteremo in un file .env)
const jwtSecret = process.env.JWT_SECRET //leggiamo la parola dal file nascosto .env
console.log(jwtSecret);

app.post('/signup', (req, res)=>{
    const password = req.body.password;
    //codifichiamo la password
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            // Store hash in your password DB.
            //salviamo nel db
            const u = new Users({
                username: req.body.username,
                email: req.body.email,
                name: req.body.name,
                password: hash,
                verified: false
            });

            let r = await u.save();

            res.json({id: r._id});
        });
    });
})


app.post('/login', async (req, res)=>{
    console.log("test");
    const username = req.body.username;
    const u = await Users.findOne({username: username})
    if(u) {
        //controllo la password
        const passwordChecks = await bcrypt.compare(req.body.password, u.password);
        if(passwordChecks) {
            //CREIAMO IL JWT
            const token = jwt.sign({id: u._id, name: u.name, email: u.email, username: u.username}, jwtSecret)
            //l'oggetto che passiamo come parametro sarà il poayload del token, ovvero quei dati che il frontend leggerà anche quando si riconnette senza passare dal login
            res.status(200).json({token: token})
        } else {
            res.status(400).json({err: 'Password non corretta'})
        }
    }
})

const jwt_decode = require('jwt-decode')

app.get('/autologin', auth, async (req, res)=>{
    console.log("AUTOLOGIN");
    let token = req.get('Authorization');
    token = token.split(" ")[1]
    const utente = jwt_decode(token);
    // const utente = req.body.user
    console.log(utente);
    const u = await Users.findOne({_id: utente.id})
    console.log("USER:", u);
    res.json(u)
})


function auth(req, res, next) {
    let token = req.get('Authorization');
    if(!token) {
        res.status(400).json({err: "Token non fornito"});
        return
    }
    token = token.split(" ")[1];
    console.log(token);

    jwt.verify(token, process.env.JWT_SECRET, (err, data)=> {
        if(!err) {
            req.body.id = data.id //posso aggiungere i dati contenuti nel token (info utente) nella request
            req.body.user = {...data}
            next();
        } else {
            res.status(401).json({err: "Token non valido"})
        }
    })

}


app.use("/oauth2/redirect/google")


// app.get("/autologin", auth, (req, res)=>{
//     //non sreve inviare i dati di login perchè auth estrarrà id dell'utente dal token
//     //usiamo l'id per prendere i dati iniziali e li inviamo come response
// })







//ORDERS
// app.get("/orders/:id", auth, (req, res)=>{
//     const id = req.params.id;
//     // if(id) res.error(404);
//     const orders = Ordini.find({user: id})
//     req.status(200).json(orders);
// })
app.get("/orders", auth, (req, res)=>{
    const id = req.body.id; //questo è aggiunto da auth
    // if(id) res.error(404);
    const orders = Ordini.find({user: id})
    req.status(200).json(orders);
})

mongoose.connect("mongodb+srv://flavio:Mvats8GJ7OzC7NYM@pt02.gflnadk.mongodb.net/M6L6").then(res=>{
    console.log("DB connected");
    app.listen(3005, ()=>{
        console.log("Server is listening on port 3005");
    })
})