const Movement = require('../../models/move');

async function show(req, res) {
  const id = req.params.id;

  try {
    let move = await Move.findById(id);
    if(move) {
      return res.render('move/show.ejs', { move });
    }

    return res.status(404).send('Entity not found');
    
  } catch (err) {
    return res.status(500).send('Internal server error'); // return any errors from uncaught exceptions within async function
  }
}

module.exports = show;