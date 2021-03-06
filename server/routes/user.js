// IMPORTING NODE MODULES
const express = require('express');

// DEFINING ROUTER
const UserRouter = express.Router();

// IMPORTING CONTOLLERS
const userControllers = require('../controllers/user');

// ASSING SPECIFIC FUNCTIONS TO SPECIFIC ROUTES
UserRouter.post('/create-user', userControllers.createUser)

// EXPORTING ROUTER
module.exports = UserRouter