const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    },
    //questo per capire da dove è comparso l'utente (registrazione locale o terze parti)
    issuer: {
        type:String,
        required: true
    }

})

const User = mongoose.model('User', schema);

module.exports = User;