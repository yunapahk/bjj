require('dotenv').config; // loading environment variables
const express = require('express'); // import express framework
const morgan = require('morgan');
const methodOverride = require('method-override');
const middleware = require('./utils/middleware');
const registerControllers = require('./utils/registercontrollers');

// REGISTER APP OBJECT
const app = express();

// REGISTER MIDDLEWARE
middleware(app);

// REGISTER ROUTES/CONTROLLERS
registerControllers(app);

// LISTENER //
const PORT = process.env.PORT || 7777;
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })