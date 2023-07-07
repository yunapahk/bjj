const Move = require('../../models/move');

async function destroy(req, res) {
    const id = req.params.id; // Get id from the request params
    await Move.findByIdAndRemove(id); 
    res.redirect('/move');
    }

module.exports = destroy;