const mongoose = require('mongoose')
const express = require('express')

const app = express()

app.use(express.json())

let counter = 0

app.get("/", async (req, res)=>{
    console.log(req)
    counter++
    return res.json({counter: counter})
})


//server in ascolto
try{
    app.listen(3000, ()=>{
        console.log("listening on port 3000")
    })
} catch(err) {
    console.log(err)
}