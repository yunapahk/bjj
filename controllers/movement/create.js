const Movement = require('../../models/movement');

async function create(req, res) {
    let newMovement = { // Create a new movement object with data from the request body
        name: req.body.movementName,
        img: req.body.movementImg
    };

    try { // Create a new movement using model and object
        const movement = await Movement.create(newMovement);
    
        console.log(newMovement); // Log the newly created objects and the request body to make sure it runs smoothly
        res.redirect('/movement');
    } catch (err) {
        console.log(error);
        res.status(500).send('Internal Server Error'); // Send error message if error occurs
    }
}

module.exports = create;