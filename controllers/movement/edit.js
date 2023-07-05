const Movement = require('../../models/movement')

async function edit(req, res) {
    try { // Get movementId from the request params
        const movementId = req.params.movementId;
        const movement = await Movement.findById(movementId); // Get movement documents from database

        res.render('movement/editMovement.ejs', { movement: movement }) // Render ejs and pass retrieved documents as data
    } catch (err) {
        console.log(error);
        
        res.status(500).send('Internal Server Error') // Send error if error occurs
    }
}

module.exports = edit