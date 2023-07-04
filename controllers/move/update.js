const Position = require('../../models/position');
const Movement = require('../models/movement');
const Submission = require('../models/submission');

async function update(req, res) {
    try { 
        const id = req.params.id; // get ID from requested params

       if (req.body.positionName && req.body.positionImg) { // condition checking if the positionName and positionImg exist from req.body
            let updatedPosition = { // if condition is true then return updatedPosition with name and image values
                name: req.body.positionName,
                img: req.body.positionImg
            };
            await Position.findByIdAndUpdate(id, updatedPosition, { runValidators: true }); // Update Position document with id using updatedPosition. { runValidators: true } makes sure updated data follows schema rules
       }
       
        if (req.body.positionName && req.body.movementImg) {
            let updatedMovement = {
                name: req.body.name,
                img: req.body.img
            };
            await Movement.findByIdAndUpdate(id, updatedMovement, { runValidators: true });
        }

        if (req.body.submissionName && req.body.submissionImg) { 
            let updatedSubmission = {
                name: req.body.name,
                img: req.body.img
            };
            await Submission.findByIdAndUpdate(id, updatedSubmission, { runValidators: true});
        }    

      res.redirect('/move'); // Redirect to /move route
    } catch (err) {
        res.status(500).send('Internal Server Error'); // Send error message if error occurs
    }
}



module.exports = update

