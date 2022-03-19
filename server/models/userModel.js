// IMPORTING MONGOOSE   
const mongoose = require('mongoose');

// DEFINING SCHEMA
const Schema = mongoose.Schema;

const userModel = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateEstablished: {
        type: String,
        required: true
    },
    recipes: {
        type: Array,
        required: true
    },
    friends: {
        type: Array,
        required: true
    },
    liked: {
        type: Array,
        required: true
    }
})

const User = mongoose.model('user', userModel);

module.exports = User;