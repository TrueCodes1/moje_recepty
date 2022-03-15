//IMPORTING ALL NECCESSARY NODE MODULES
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// DEFINING SERVER
const app = express();

app.use(cors());


//DEFINING PORT NUMBER; IF CANNOT BE ACCESSED VIA ENV VARIABLE, SET TO 4000
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})