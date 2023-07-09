const Move = require('../../models/move');

async function create(req, res) {
    let newMove = {
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        points: req.body.points,
        img: req.body.img,
    }

    try {
        const move = await Move.create(newMove)
        console.log(newMove, req.body)
        res.redirect("/move")
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports = create