const Position = require('../../models/position')

async function edit(req, res) {
    try { // Get positionId from the request params
        const positionId = req.params.positionId;
        const position = await Position.findById(positionId); // Get position documents from database

        res.render('position/editPosition.ejs', { position: position }) // Render ejs and pass retrieved documents as data
    } catch (err) {
        console.log(error);
        
        res.status(500).send('Internal Server Error') // Send error if error occurs
    }
}

module.exports = edit