const Movement = require('../models/movement');
const Position = require('../models/position');
const Submission = require('../models/submission');

async function show(req, res) {
  const id = req.params.id;

  try {
    let position = await Position.findById(id);
    if(position) {
      return res.render('position/show.ejs', { position });
    }

    let movement = await Movement.findById(id);
    if(movement) {
      return res.render('movement/show.ejs', { movement });
    }

    let submission = await Submission.findById(id);
    if(submission) {
      return res.render('submission/show.ejs', { submission });
    }

    return res.status(404).send('Entity not found');
    
  } catch (err) {
    return res.status(500).send('Internal server error'); // return any errors from uncaught exceptions within async function
  }
}

module.exports = show;