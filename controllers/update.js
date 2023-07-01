const Move = require("../../models/move")

async function update(req, res) {
    const id = req.params.id
    let updatedPosition = {
        name: req.body.name,
        img: req.body.img,
    };

    let updatedMovement = {
        name: req.body.name,
        img: req.body.img
    };

    let updatedSubmission = {
        name: req.body.name,
        img: req.body.img
    };

    await Move.findByIdAndUpdate(id, updatedPosition);
    await Move.findByIdAndUpdate(id, updatedMovement);
    await Move.findByIdAndUpdate(id, updatedSubmission);

    res.redirect("/move");
}

module.exports = update

