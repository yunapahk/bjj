const Position = require('../../models/position');
const Movement = require('../../models/movement');
const Submission = require('../../models/submission');


async function destroy(req, res) {
    const positionId = req.params.positionId; // Get positionId, movementId, and submissionId from the request params
    const movementId = req.params.movementId;
    const submissionId = req.params.submissionId;

    if (positionId) { // If positionId exists, delete the Position document with id
        await Position.findByIdAndRemove(positionId); 
        res.redirect('/position');

    } else if (movementId) { // If movementId exists, delete the Movement document with id
        
        await Movement.findByIdAndRemove(movementId);
        res.redirect('/movement');

    } else if (submissionId) { // If submissionId exists, delete the Movement document with id
        await Submission.findByIdAndRemove(submissionId);
        res.redirect('/submission')
    } else {
        res.redirect('/move') // If none of the ids exist, redirect to '/move'
    }
}

module.exports = destroy;