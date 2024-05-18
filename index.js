const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const SignUp = require("./models/SignUps.js");
const Contact = require("./models/Contacts.js");
const Payment = require("./models/Payments.js");

const path = require('path')
const app = express();

app.use(bodyParser.json());
app.use(express.static('frontend'));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/Cara')
.then(() => console.log("MongoDb Connected"))
.catch((error) => console.log("mongo connection error: ", error))

app.post("/login",async (req,res)=>{
    try {
        const existingUser = await SignUp.findOne({
            $and:[
                {email: req.body.email}, {password: req.body.password}
            ]
        });
        if(!existingUser){
             res.sendFile(path.join(__dirname, '/frontend/signup.html'));
        } else {
             res.sendFile(path.join(__dirname, '/frontend/index.html'));
        }
    } catch(err) {  
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
});


app.post('/signup', async (req, res) => {
            const newsignup = await SignUp.create({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            address : req.body.address,
            password : req.body.password
        });
        res.sendFile(path.join(__dirname, '/frontend/index.html'));
    })


    app.post('/contact', async (req, res) => {
        const newcontact = await Contact.create({
        name : req.body.name,
        email : req.body.email,
        subject : req.body.subject,
        message: req.body.message
    });
    res.sendFile(path.join(__dirname, '/frontend/contact.html'));
})


app.post('/payment', async (req, res) => {
    const newpayment = await Payment.create({
    name : req.body.name,
    email : req.body.email,
    address : req.body.address,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
    cardname: req.body.cardname,
    cardnumber: req.body.cardnumber,
    cvv: req.body.cvv,
    expyear: req.body.expyear,
    expmonth: req.body.expmonth

});
res.sendFile(path.join(__dirname, '/frontend/Paymentsuccess.html'));
})


app.get("/",(req,res)=>{
    res.set({
        "Access Control Allow Origin.":"*"
    });
    res.sendFile(path.join(__dirname, '/frontend/login.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
});
