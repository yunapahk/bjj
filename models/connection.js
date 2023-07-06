require("dotenv").config() // bring in .env variables
const mongoose = require("mongoose") // MongoDB ORM

const DATABASE_URL = process.env.DATABASE_URL // get DATABASE URI

mongoose.connect(DATABASE_URL, { useNewUrlParser: true }, { useUnifiedTopology: true}) // connect to MongoDB

mongoose.connection
    .on("open", () => {console.log("Connected")})
    .on("close", () => {console.log("Disonnected")})
    .on("error", () => {console.log(error)})

module.exports = mongoose