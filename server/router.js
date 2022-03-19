// IMPORTING NODE MODULES
const express = require('express');

// DEFINING ROUTER
const MainRouter = express.Router();

// IMPORTING SPECIFIC ROUTERS
const UserRouter = require('./routes/user');

// ASSIGNING GENERAL ROUTES TO ITS SPECIFIC ROUTERS
MainRouter.use('/', UserRouter);

// EXPORTING ROUTER
module.exports = MainRouter;