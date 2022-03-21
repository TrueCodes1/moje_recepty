//IMPORTING ALL NECCESSARY NODE MODULES
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

// IMPORTING MAIN ROUTER
const MainRouter = require('./router');

// IMPORTING CREDENTIALS AS ENV VARIABLES
const CLUSTER_URI = process.env.DATABASE_URI;

// DEFINING SERVER
const app = express();

app.use(cors());
// REDIRECTING ALL REQUESTS TO THE MAIN ROUTER
app.use('/', MainRouter);

//DEFINING PORT NUMBER; IF CANNOT BE ACCESSED VIA ENV VARIABLE, SET TO 4000
const port = process.env.PORT || 4000;

// CONNECTING TO MONGO DB CLUSTER
mongoose.connect(CLUSTER_URI)
.then(() => {
    console.log('Successfuly connected to database.');
    // AS THE RESULT OF CONNECTION TO THE DATABASE THE APPLICATION STARTS TO LISTEN ON GIVEN PORT
    app.listen(port, () => {
        console.log(`Listening on port ${port}.`)
    })
})
.catch((err) => {
    console.log('Not connected')
    console.error(err)
})

const db = mongoose.connection
