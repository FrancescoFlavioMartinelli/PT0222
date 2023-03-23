const mongoose = require('mongoose');

const schema = mongoose.schema({
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
    }

})

const User = mongoose.model('User', schema);

module.exports = User;