const Submission = require('../../models/submission');

async function update(req, res) {
    try { 
        const id = req.params.id; // get ID from requested params

        if (req.body.submissionName && req.body.submissionImg) { // condition checking if the positionName and positionImg exist from req.body
            let updatedSubmission = {// if condition is true then return updatedPosition with name and image values
                name: req.body.name,
                img: req.body.img
            };
            await Submission.findByIdAndUpdate(id, updatedSubmission, { runValidators: true});
        }    

      res.redirect('/submission'); // Redirect to /submission route
    } catch (err) {
        res.status(500).send('Internal Server Error'); // Send error message if error occurs
    }
}

module.exports = update

