const Bjj = require("../../models/bjj")

async function index(req, res) {
    const bjj = await Bjj.find({})
    res.render("bjj/index.ejs", {bjj})
}

module.exports = index