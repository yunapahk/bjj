const Move = require('../../models/move');

async function update(req, res) {
    const id = req.params.id
    let updatedMove = {
        name: req.body.name,
        img: req.body.img,
    }

    await Move.findByIdAndUpdate(id, updatedMove)
    res.redirect("/move")
}

module.exports = update

