const Move = require("../../models/move")

async function edit(req, res) {
    const id = req.params.id
    const move = await Move.findById(id)
    res.render("move/edit.ejs")
}