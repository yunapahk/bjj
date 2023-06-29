const Bjj = require("../../models/songbird")

async function edit(req, res) {
    const id = req.params.idconst bjj = await Bjj.findById(id)
    res.render("bjj/edit.ejs")
}