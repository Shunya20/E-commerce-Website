const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    address:String,
    city :String,
    state :String,
    pincode :Number,
    cardname :String,
    cardnumber :Number,
    cvv :Number,
    expyear :Number,
    expmonth  :String 
});

const Payment = mongoose.model('payment', UserSchema)

module.exports = Payment
