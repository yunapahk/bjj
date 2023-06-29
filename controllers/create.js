const Bjj = require("../../models/bjj")

async function create(req, res) {
    let newBjj = {
        name: req.body.name,
        position: req.body.position,
        movement: req.body.movement,
        submission: req.body.submission,
        img: req.body.img
    }

    const bjj = Bjj.create(newBjj)
    console.log(newBjj, req.body)
    res.redirect("/bjj")
}

module.exports = create