const Move = require('../../models/move');

async function show(req, res) {
  const id = req.params.id
  const move = await Move.findById(id)
  res.render("move/show.ejs", { move })
}

module.exports = show;