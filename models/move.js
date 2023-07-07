const mongoose = require('./connection')

const {Schema, model} = mongoose

const moveSchema = new Schema ({
    name: String,
    type: String,
    description: String,
    points: Number,
    img: String
})

const Move = model('Move', moveSchema)

module.exports = Move