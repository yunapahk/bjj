require('dotenv').config // loading environment variables
const express = require('express') // import express framework
const middleware = require('./utils/middleware')
const registerControllers = require('./utils/registercontrollers')

// REGISTER APP OBJECT
const app = express()

// REGISTER MIDDLEWARE
middleware(app)

// REGISTER ROUTES/CONTROLLERS
registerControllers(app);

// LISTENER //
app.listen(process.env.PORT, () => {
    console.log('Listening on port:', process.env.PORT)
})