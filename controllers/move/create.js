const Move = require('../../models/move');

async function create(req, res) {
    let newMove = { // Create a new move object with data from the request body
        name: req.body.moveName,
        img: req.body.moveImg
    }

    const move = Move.create(newMove)
    console.log(newMove, req.body)
    res.redirect("/move")
}

module.exports = create