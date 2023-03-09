const express = require('express');
// const mongoose = require('mongoose');

const app = express()
app.use(express.json())
// app.use(logger)
// app.use(checkApiKey)
// app.use(logger1)

app.get("/", (req, res) => {
    res.send("Hello world")
    // next()
})
app.get("/test", checkApiKey, convertTime, (req, res, next) => {
    if(req.query.value == undefined) next()
    else res.send("Hello world " + req.query.value)
    // next()
})

app.get("/appuntamento", checkApiKey, convertTime, (req, res, next) => {
    if(req.query.time == undefined) next()
    if(req.query.time < 10*60*60) res.send("Appuntamento non disponibile")
    else res.send("Appuntamento disponibile")
})

app.get("/primoAppuntamentoDisponibile",checkApiKey, (req,res, next)=>{
    req.query.time = 37800
    next()
}, convertResponse)

app.get("/prova", nextLogger, test, logger, (req, res, next)=>{
    console.log("PROVA");
    res.send("PROVA")
})

function logger (req, res, next) {
    console.log("LOG");
    // res.send("LOG")

    next()
}

function checkApiKey (req, res, next) {
    if(req.query.apikey != undefined && req.query.apikey == "123456"){
        console.log("ok");
        next()
    }
    console.log("no");
    res.status(401).send("Unauthorized")
}

function checkApiKey(req, res, next) {
    console.log("Before");
    if(next()){
        //response già data
        return
    } else {
        
    }
    console.log("After");
    res.send
}

function notFound(req, res, next) {
    res.send("Not found")
}

function convertTime(req, res, next) {
    let h = Number(req.query.hours)
    let m = parseInt(req.query.minutes)
    const time = h*60*60 + m*60
    console.log(h, m, time);
    req.query.time = time
    next()
}

function convertResponse(req, res, next) {
    res.send({hours: Math.floor(req.query.time/60/60), minutes: (req.query.time - (this.hours * 60 * 60))/60})
}

app.use(notFound)

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
})