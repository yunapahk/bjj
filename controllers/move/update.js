const Move = require('../../models/move');

async function update(req, res) {
    try { 
        const id = req.params.id; // get ID from requested params

        if (req.body.positionName && req.body.moveImg) { // condition checking if the positionName and positionImg exist from req.body
            let updatedMove = { // if condition is true then return updatedMove with name and image values
                name: req.body.name,
                img: req.body.img
            };
            await Move.findByIdAndUpdate(id, updatedMove, { runValidators: true }); // Update Move document with id using updatedMove. { runValidators: true } makes sure updated data follows schema rules
        }

      res.redirect('/move'); // Redirect to /movement route
    } catch (err) {
        res.status(500).send('Internal Server Error'); // Send error message if error occurs
    }
}

module.exports = update

