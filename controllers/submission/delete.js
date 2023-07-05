const Submission = require('../../models/submission');

async function destroy(req, res) {
    const submissionId = req.params.submissionId; // Get submissionId from the request params
   
        await Submission.findByIdAndRemove(submissionId); 
        res.redirect('/submission');
}

module.exports = destroy;