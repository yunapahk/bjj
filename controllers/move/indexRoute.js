const Position = require('../../models/position');
const Movement = require('../../models/movement');
const Submission = require('../models/submission');

async function index(req, res) { // Retreive all positions, movements, and submissions from the respective models
    const positions = await Position.find({})
    const movements = await Movement.find({})
    const submissions = await Submission.find({})

    res.render('move/index.ejs', { positions, movements, submissions }) // Render ejs and pass retrieved data as variables
}

module.exports = index