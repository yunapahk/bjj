const Movement = require('../../models/movement');

async function update(req, res) {
    try { 
        const id = req.params.id; // get ID from requested params

        if (req.body.positionName && req.body.movementImg) { // condition checking if the positionName and positionImg exist from req.body
            let updatedMovement = { // if condition is true then return updatedPosition with name and image values
                name: req.body.name,
                img: req.body.img
            };
            await Movement.findByIdAndUpdate(id, updatedMovement, { runValidators: true }); // Update Position document with id using updatedPosition. { runValidators: true } makes sure updated data follows schema rules
        }

      res.redirect('/movement'); // Redirect to /movement route
    } catch (err) {
        res.status(500).send('Internal Server Error'); // Send error message if error occurs
    }
}

module.exports = update

