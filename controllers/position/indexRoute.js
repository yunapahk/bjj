const Position = require('../../models/position');

async function index(req, res) { // Retreive all positions from the respective models
    const positions = await Position.find({})

    res.render('position/index.ejs', { positions }) // Render ejs and pass retrieved data as variables
}

module.exports = index