const Submission = require('../../models/submission')

async function edit(req, res) {
    try { // Get submissionId from the request params
        const submissionId = req.params.submissionId;
        const submission = await Submission.findById(submissionId); // Get submission documents from database

        res.render('submission/editSubmission.ejs', { submission: submission }) // Render ejs and pass retrieved documents as data
    } catch (err) {
        console.log(error);
        
        res.status(500).send('Internal Server Error') // Send error if error occurs
    }
}

module.exports = edit