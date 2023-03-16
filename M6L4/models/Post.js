const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: String,
    body: String,
    comments: [{
        body: String,
        author: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    }],
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

module.exports = mongoose.model("Post", schema)