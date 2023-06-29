const mongoose = require('./connection')

const {Schema, model} = mongoose;

const bjjSchema = new Schema ({
    name: String,
    position: String,
    movement: String,
    submission: String,
    img: String
})

const Bjj = model("Bjj", bjjSchema)

module.exports = Bjj