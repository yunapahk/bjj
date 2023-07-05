const Movement = require('../../models/movement');

async function index(req, res) { // Retreive movements from the respective models
    const movements = await Movement.find({})

    res.render('movement/index.ejs', { movements }) // Render ejs and pass retrieved data as variables
}

module.exports = index