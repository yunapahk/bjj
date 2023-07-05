const Movement = require('../../models/movement');

async function destroy(req, res) {
    const movementId = req.params.movementId; // Get movementId from the request params

        await Movement.findByIdAndRemove(movementId); 
        res.redirect('/movement');
    }

module.exports = destroy;