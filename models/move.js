////////////////////////
// Setup - Import deps 
////////////////////////
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const moveSchema = new Schema ({
    name: String,
    type: String,
    description: String,
    points: Number,
    img: String,
    meta: {
        likes: Number,
        favs: Number,
    },
})

const Move = model('Move', moveSchema)

//////////////////////
// Export
//////////////////////
module.exports = Move