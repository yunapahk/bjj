const Move = require('../../models/move')

async function edit(req, res) {
    try { // Get moveId from the request params
        const moveId = req.params.moveId;
        const move = await Move.findById(moveId); // Get movement documents from database

        res.render('move/editMove.ejs', { move: move }) // Render ejs and pass retrieved documents as data
    } catch (err) {
        console.log(error);
        
        res.status(500).send('Internal Server Error') // Send error if error occurs
    }
}

module.exports = edit