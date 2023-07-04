const mongoose = require('./connection')

const {Schema, model} = mongoose

const movementSchema = new Schema ({
    name: String,
    img: String
})

const Movement = model('Movement', movementSchema)

module.exports = Movement