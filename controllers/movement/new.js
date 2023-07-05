function newMovement(req, res) { // Render movement/new.ejs when new movement is created
    res.render('movement/newMovement.ejs')
}

module.exports = newMovement;