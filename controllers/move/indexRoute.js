const Move = require('../../models/move');

async function index(req, res) {
  const moves = await Move.find({});
  const user = req.user; 

  res.render('move/index.ejs', { moves, user });
}

module.exports = index;
