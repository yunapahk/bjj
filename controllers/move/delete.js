const Move = require('../../models/move');

async function destroy(req, res) {
    const moveId = req.params.id; // Get movementId from the request params
    await Move.findByIdAndRemove(moveId); 
    res.redirect('/move');
    }

module.exports = destroy;