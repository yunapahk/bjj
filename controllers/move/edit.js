const Move = require('../../models/move')

async function edit(req, res) {
        const moveId = req.params.moveId;
        const move = await Move.findById(moveId); // Get movement documents from database
        res.render('move/editMove.ejs', { move: move }) // Render ejs and pass retrieved documents as data
    }

module.exports = edit