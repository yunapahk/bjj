function newMove(req, res) { // Render movement/new.ejs when new movement is created
    res.render('move/new.ejs')
}

module.exports = newMove;