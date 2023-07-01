const Move = require("../../models/move")

async function destroy(req, res) {
    const id = req.params.id
    await Move.findByIdAndRemove(id)
    res.redirect("/move")
}

module.exports = destroy