 const Position = require('../../models/position');
const Movement = require('../models/movement');
const Submission = require('../models/submission');

async function showPosition(req, res) { // async function to handle requests for Position
    try { 
        const id = req.params.id; // extracts the 'id' parameter from the request's URL
        const position = await Position.findById(id); // awaits for database to find the Position document. If nonexistant 'findById' = null
        
        if (!position) { // if 'position' = null 404 message will be sent
            return res.status(404).send('Position Not Found');
        }
        res.render('move/show.ejs', {position}) // if 'position' != null document will be sent to show.ejs
    } catch (err) { // return any errors from uncaught exceptions within async function
        return res.status(500).send('Internal server error') // block will catch errors to prevent crashing
    }
}


async function showMovement(req, res) { // async function to handle requests for Movement
    try {
        const id = req.params.id;
        const movement = await Movement.findById(id);
        if (!movement) {
            return res.status(404).send('Movement Not Found'); // Corrected here
        } 
        res.render('move/show.ejs', {movement});
    } catch (err) {
        return res.status(500).send('Internal server error')
    }
}


async function showSubmission(req, res) { // async function to handle requests for Submission
    try {
        const id = req.params.id
        const submission = await Submission.findById(id)
        if (!submission) {
            return res.status(404).send('Submission Not Found'); // Corrected here
        }
        res.render('move/show.ejs', {submission});
    } catch (err) {
        return res.status(500).send('Internal server error') // Corrected here
    }
}

module.exports = { showPosition, showMovement, showSubmission } // Export functions and import into router handlers file