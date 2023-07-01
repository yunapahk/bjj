const mongoose = require('./connection')

const {Schema, model} = mongoose;

const moveSchema = new Schema ({
    position: {
        name: String,
        img: String
    },

    movement: {
        name: String,
        img: String
    },

    submission: {
        name: String,
        img: String
    }
})

const Move = model("Move", moveSchema)

module.exports = Move