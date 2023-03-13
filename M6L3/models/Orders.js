const mongoose = require('mongoose')

const schema = mongoose.Schema({
    code:Number,
    total: Number
})

module.exports = mongoose.model("Orders", schema)