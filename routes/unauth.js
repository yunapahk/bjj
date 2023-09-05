////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require('express')
const router = express.Router()
const unauthController = require('../controllers/unauth')

// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show
router.get("/", unauthController.main)
router.post("/signup", unauthController.signup)
router.post("/login", unauthController.login)
router.post("/logout", unauthController.logout)

///////////////////////////
// Server Listener
/////////////////////////
module.exports = router