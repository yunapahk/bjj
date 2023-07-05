const Submission = require('../../models/submission');

async function create(req, res) {
    let newSubmission = { // Create a new submission object with data from the request body
        name: req.body.submissionName,
        img: req.body.submissionImg
    };

    try { // Create a new submission using model and object
        const submission = await Submission.create(newSubmission);
    
        console.log(newSubmission); // Log the newly created objects and the request body to make sure it runs smoothly
        res.redirect('/submission');
    } catch (err) {
        console.log(error);
        res.status(500).send('Internal Server Error'); // Send error message if error occurs
    }
}

module.exports = create;