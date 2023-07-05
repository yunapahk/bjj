function newSubmission(req, res) { // Render submission/new.ejs when new submission is created
    res.render('/submission/newSubmission.ejs')
}

module.exports = newSubmission;