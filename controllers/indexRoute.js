const Move = require("../../models/move")

async function index(req, res) {
    const move = await Move.find({})
    res.render("move/index.ejs", {move})
}

module.exports = index