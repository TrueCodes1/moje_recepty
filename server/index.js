//IMPORTING ALL NECCESSARY NODE MODULES
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

// IMPORTING MAIN ROUTER
const MainRouter = require('./router');

// IMPORTING CREDENTIALS AS ENV VARIABLES
const CLUSTER_URI = process.env.DATABASE_URI;

// CONNECTING TO MONGO DB CLUSTER
mongoose.connect(CLUSTER_URI)
.then(() => {
    console.log('Successfuly connected.')
})
.catch((err) => {
    console.log('Not connected')
    console.error(err)
})

const db = mongoose.connection

// DEFINING SERVER
const app = express();

app.use(cors());
app.use('/', MainRouter);

//DEFINING PORT NUMBER; IF CANNOT BE ACCESSED VIA ENV VARIABLE, SET TO 4000
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})