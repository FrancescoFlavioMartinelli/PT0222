const express = require('express');
const mongoose = require('mongoose');

const Users = require('./Users');
const Ordini = require('./Ordini');

const app = express();

app.use(express.json());

app.get("/orders/:id", (req, res)=>{
    const id = req.params.id;
    // if(id) res.error(404);
    const orders = Ordini.find({user: id})
    req.status(200).json(orders);
})





mongoose.connect("mongodb+srv://flavio:Mvats8GJ7OzC7NYM@pt02.gflnadk.mongodb.net/M6L6").then(res=>{
    console.log("DB connected");
    app.listen(3001, ()=>{
        console.log("Server is listening on port 3001");
    })
})