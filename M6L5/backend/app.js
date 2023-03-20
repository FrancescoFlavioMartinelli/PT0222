const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());




mongoose.connect("mongodb+srv://flavio:Mvats8GJ7OzC7NYM@pt02.gflnadk.mongodb.net/M6L4").then(res=>{
    console.log("DB connected");
    app.listen(3001, ()=>{
        console.log("Server is listening on port 3001");
    })
})