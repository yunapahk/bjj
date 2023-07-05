const Submission = require('../../models/submission');

async function index(req, res) { // Retreive all submissions from the respective models
    const submissions = await Submission.find({})

    res.render('submission/index.ejs', { submissions }) // Render ejs and pass retrieved data as variables
}

module.exports = index