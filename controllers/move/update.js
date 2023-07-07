const Move = require('../../models/move');

async function update(req, res) {
    const id = req.params.id
    let updatedMove = {
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        points: req.body.points,
        img: req.body.img,
    }

    try {
        await Move.findByIdAndUpdate(id, updatedMove)
        res.redirect("/move")
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports = update;

