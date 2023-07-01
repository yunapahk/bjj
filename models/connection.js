const dotenv = require("dotenv")
const mongoose = require("mongoose")
require("dotenv").config()

const DATABASE_URL = process.env.DATABASE_URL
console.log(DATABASE_URL)

mongoose.connect(DATABASE_URL, {})

mongoose.connection
    .on("open", () => {console.log("Connected")})
    .on("close", () => {console.log("Disonnected")})
    .on(error, () => {console.log(error)})

module.exports = mongoose