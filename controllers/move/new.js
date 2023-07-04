function newPosition(req, res) {
    res.render("move/new.ejs") // Render move/new.ejs when new position is created
}

function newMovement(req, res) { // Render move/new.ejs when new movement is created
    res.render('move/new.ejs')
}

function newSubmission(req, res) { // Render move/new.ejs when new submission is created
    res.render('/move/new.ejs')
}

module.exports = { newPosition, newMovement, newSubmission }