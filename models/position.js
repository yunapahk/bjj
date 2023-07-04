const mongoose = require('./connection')

const {Schema, model} = mongoose; // Deconstructs schema and model objects from mongoose

const positionSchema = new Schema ({ // Defines a new mongoose schema for 'Position' 
        name: String, // Defines a field 'name' wth String as type
        img: String // Defines a field 'img' with String as type
});

const Position = model('Position', positionSchema) // Creates model named 'Position' based on defined schema

module.exports = Position