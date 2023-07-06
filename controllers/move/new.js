function newMove(req, res) { // Render movement/new.ejs when new movement is created
    res.render('move/newMove.ejs')
}

module.exports = newMove;