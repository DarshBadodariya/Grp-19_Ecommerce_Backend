const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },

    lastname: {
        type: String,
        maxlength: 32,
        trim: true,
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    mobileno: {
        type: Number,
        required: true,
        maxlength: 10
    },

    address: {
        line1: String,
        line2: String,
        city: String,
        pincode: Number
    },

    encry_password: {
        type: String,
        required: true
    },

    role: {
        type: Number,
        default: 0
    },

    cart: {
        type: Array,
        default: []
    },
    
    wishlist: {
        type: Array,
        default: []
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model("user",userSchema)