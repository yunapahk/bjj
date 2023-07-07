const move = require('.')
const Move = require('../../models/move');

async function index(req, res) { // Retreive movements from the respective models
    const moves = await Move.find({})
    res.render('move/index.ejs', { moves }) // Render ejs and pass retrieved data as variables
}

module.exports = index