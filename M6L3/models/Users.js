const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    address: {
        city: String,
        state: String
    },
    contacts: [String]
})

// const User = mongoose.model('User', userSchema)

// module.exports = User

module.exports = mongoose.model('User', userSchema)