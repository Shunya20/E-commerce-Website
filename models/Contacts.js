const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String  
});

const Contact = mongoose.model('contact', UserSchema)

module.exports = Contact
