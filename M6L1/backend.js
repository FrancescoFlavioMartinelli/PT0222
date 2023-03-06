const mongoose = require('mongoose')
const express = require('express')
//impostazione express
const app = express()
//permette di leggere parametri e body come oggetti dopo la conversione json
app.use(express.json())

//CREAZIONE MODELS
const prodottiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const prodottiModel = mongoose.model('Prodotti', prodottiSchema);
//questi models di solito sono gestiti in file esterni. Dopo aver creato la costante come sopra in un altro file esportala con
// module.exports = { prodottiModel } //module è oggetto di node
//e in questo file ottieni la costante con const { prodottiModel } = require("./nomeFile")
//così il file principale è pulito di tutti gli Schemas


//ROTTE API
//app.metodo(route, callback)
//callback: (request, response) => {return response.status(n).json(risultato)}
//status e json si possono omettere, ognuno aggiunge dei dati alla response
app.get("/", async (req, res)=>{
    console.log(req)
    return res.json("HELLO")
})

app.post("/prodotti", async (req, res)=>{
    //aggiungi prodotto al db creando un oggetto di classe Model ed esgeuendo save sull'istanza di Model
    const newProdotto = new prodottiModel({...req.body})
    const risultato = await newProdotto.save()
    console.log(risultato);
    return res.status(201).json(newProdotto)
})

app.get("/prodotti", async (req, res)=>{
    //lettura tutti i prodotti con find, metodo di Model
    const tuttiIProdotti = await prodottiModel.find()
    return res.status(200).json(tuttiIProdotti)
})

app.get("/prodotti/:id", async (req, res)=>{
    //lettura prodotto per id con findById, metodo di Model

    // const p = req.params
    // console.log(p);
    const { id } = req.params
    try {
        const tuttiIProdotti = await prodottiModel.findById(id)
        console.log(tuttiIProdotti);
        return res.json(tuttiIProdotti)//il risultato di findById in caso non trovasse un match genererebbe un errore nella response quindi usiamo try{} 
    } catch(err) {
        res.status(504).json({error: "Prodotto non trovato"})
    }
})

app.put("/prodotti/:id", async (req, res)=>{
    const { id } = req.params
    const body = req.body
    try {
        // await prodottiModel.updateOne({ id }, body)
        // await prodottiModel.updateOne({ id: id }, body)
        //queste due versioni sopra sono equivalenti e come indicate in documentazione.
        //l'errore che impediva il funzionamento è nell'oggetto che passiamo per identificare l'elemento, nel nostro db infatti gli id vengono creati automaticamente ma sono chiamati _id
        //per accorgermi dell'errore ho fatto il console.log(await prodottiModel.updateOne({ id }, body)) per osservare i risultati dell'operazione, da lì ho notato che la voce matchedCount era 0, quindi non era stato trovato l'elemento da modificare (il return in questo caso è json() del find che invece da risultato corretto)
        await prodottiModel.updateOne({ _id: id }, body)
        const pmodificato = await prodottiModel.findById(id)
        return res.json(pmodificato)
    } catch(err) {
        return res.status(500)
    }
})

app.delete("/prodotti/:id", async (req, res)=>{
    //eliminazione elemento per id con findByIdAndDelete, simile al findById
    const { id } = req.params
    const prodttoEliminato = await prodottiModel.findByIdAndDelete(id) //il risutltato è l'oggetto rimosso, manipolbile per un'ultima volta
    return res.status(200).json(prodttoEliminato)
})




const start = async ()=> {
    try{
        //impostazione mongoose
        await mongoose.connect("mongodb+srv://flavio:Mvats8GJ7OzC7NYM@pt02.gflnadk.mongodb.net/M6L1")

        //server in ascolto
        app.listen(3000, ()=>{
            console.log("listening on port 3000")
        })
    } catch(err) {
        console.log(err)
    }
}


//avvio backend
start()