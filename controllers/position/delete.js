const Position = require('../../models/position');

async function destroy(req, res) {
    const positionId = req.params.positionId; // Get positionId from the request params
   
        await Position.findByIdAndRemove(positionId); 
        res.redirect('/position');
}

module.exports = destroy;