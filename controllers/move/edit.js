const Move = require('../../models/move')

async function edit(req, res) {
        const id = req.params.id;
        const move = await Move.findById(id); // Get movement documents from database
        res.render('move/edit.ejs', { move }) // Render ejs and pass retrieved documents as data
    }

module.exports = edit