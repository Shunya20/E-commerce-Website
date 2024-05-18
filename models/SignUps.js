const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address:String,
    password: String,
});

const Signup = mongoose.model('Signup', UserSchema)

module.exports = Signup
