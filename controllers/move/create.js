const Position = require('../../models/position');
const Movement = require('../../models/movement');
const Submission = require('../../models/submission');


async function create(req, res) {
    let newPosition = {   // Create a new position object with data from the request body
        name: req.body.positionName,
        img: req.body.positionImg
    };

    let newMovement = {
        name: req.body.movementName,
        img: req.body.movementImg
    };

    let newSubmission = {
        name: req.body.submissionName,
        img: req.body.submissionImg
    };

    try { // Create a new position using the appropriate model and object
        const position = await Position.create(newPosition);
        const movement = await Movement.create(newMovement);
        const submission = await Submission.create(newSubmission);
    
        console.log(newPosition, newMovement, newSubmission, req.body); // Log the newly created objects and the request body to make sure it runs smoothly
        res.redirect('/move');
    } catch (err) {
        console.log(error);
        res.status(500).send('Internal Server Error'); // Send error message if error occurs
    }
}

module.exports = create;