const Position = require('../../models/position');

async function update(req, res) {
    try { 
        const id = req.params.id; // get ID from requested params

       if (req.body.positionName && req.body.positionImg) { // condition checking if the positionName and positionImg exist from req.body
            let updatedPosition = { // if condition is true then return updatedPosition with name and image values
                name: req.body.positionName,
                img: req.body.positionImg
            };
            await Position.findByIdAndUpdate(id, updatedPosition, { runValidators: true }); // Update Position document with id using updatedPosition. { runValidators: true } makes sure updated data follows schema rules
       }
      
      res.redirect('/position'); // Redirect to /position route
    } catch (err) {
        res.status(500).send('Internal Server Error'); // Send error message if error occurs
    }
}

module.exports = update

