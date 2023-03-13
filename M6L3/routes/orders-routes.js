const express = require('express');
const { models } = require('mongoose');
const router = express.Router()

//Models
const Orders = require("../models/Orders")



router.get('/orders', async (req, res)=>{
    console.log("orders api");
    const u = await Orders.find();
    res.status(200).json(u)
})

module.exports = router