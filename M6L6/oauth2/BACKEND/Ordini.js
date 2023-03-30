const mongoose = require('mongoose');
const schema = mongoose.Schema({
    totale: {
        type: Number,
        required: true
    },
    prodotti: {
        type: [String]
    },
    user: {
        //user è quasi sempre reference
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Ordine = mongoose.model("Ordini", schema)

module.exports = Ordine;