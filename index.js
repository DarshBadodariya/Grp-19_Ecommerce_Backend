const mongoose = require('mongoose');
const express = require("express");
const app = express();
const users = require("./models/user.js");
const products = require("./models/product.js");
const orders = require("./models/order.js");
require('dotenv').config()
const port = process.env.PORT || 4000;

//DB connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() =>{
    console.log("DB CONNECTED")
});

//Starting a server 
app.listen(port, () =>{
    console.log(`app is running at ${port}`);
    //const Blog = mongoose.model('User', userSchema);
})

