const Bjj = require("../../models/bjj")

async function update(req, res) {
    const id = req.params.id
    let updatedBjj = {
        name: req.body.name,
        position: req.body.position,
        movement: req.body.movement,
        submission: req.body.submission
    }
    await Bjj.findByIdAndUpdate(id, updatedBjj)
    res.redirect("/bjj")
}

module.exports = update