const Bjj = require("../../models/bjj")

async function destroy(req, res) {
    const id = req.params.id
    await Songbird.findByIdAndRemove(id)
    res.redirect("/bjj")
}

module.exports = destroy