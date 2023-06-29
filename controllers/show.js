const Bjj = require("../../models/bjj")

async function show(req, res) {
    const id = req.params.id
    const bjj = await Bjj.findById(id)
    console.log(bjj)
    res.render("bjj/show.ejs", {bjj})
}

module.exports = show