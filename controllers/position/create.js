const Position = require('../../models/position');

async function create(req, res) {
    let newPosition = {   // Create a new position object with data from the request body
        name: req.body.positionName,
        img: req.body.positionImg
    };

    try { // Create a new position using model and object
        const position = await Position.create(newPosition);
    
        console.log(newPosition); // Log the newly created objects and the request body to make sure it runs smoothly
        res.redirect('/position');
    } catch (err) {
        console.log(error);
        res.status(500).send('Internal Server Error'); // Send error message if error occurs
    }
}

module.exports = create;