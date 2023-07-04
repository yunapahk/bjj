const Position = require('../../models/position')
const Movement = require('../../models/movement')
const Submission = require('../../models/submission')

async function edit(req, res) {
    try { // Get the positionId, movementId, and submissionId from the request params
        const positionId = req.params.positionId;
        const movementId = req.params.movementId;
        const submissionId = req.params.submissionId;

        const position = await Position.findById(positionId); // Get position, movement, and submission documents from database
        const movement = await Movement.findById(movementId);
        const submission = await Submission.findById(submissionId);

        res.render('move/edit.ejs', { position: position, movement: movement, submission: submission}) // Render ejs and pass retrieved documents as data
    } catch (err) {
        console.log(error);
        
        res.status(500).send('Internal Server Error') // Send error if error occurs
    }
}

module.exports = edit