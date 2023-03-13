const express = require('express')
const mongoose = require('mongoose')
const debugMiddlewares = require("./middlewares/debug")
const userRoutes = require('./routes/users-routes')
const ordersRoutes = require('./routes/orders-routes')

//EXPRESS
const app = express()
//Middlewares
app.use(express.json())
app.use(debugMiddlewares.logger)
//Routes
app.use(userRoutes)
app.use(ordersRoutes)
///MONGOOSE
mongoose
    .connect("mongodb+srv://flavio:Mvats8GJ7OzC7NYM@pt02.gflnadk.mongodb.net/M6L3")
    .then((res)=>{
        console.log("DB Connected");
        //LISTENER
        app.listen(3000, async ()=>{
            console.log("Server is listening on port 3000");
        })
    })

