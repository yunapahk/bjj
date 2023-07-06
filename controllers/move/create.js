const Move = require('../../models/move');

async function create(req, res) {
    let newMove = { // Create a new movement object with data from the request body
        name: req.body.moveName,
        img: req.body.moveImg
    };

    try { // Create a new movement using model and object
        const move = await Move.create(newMove);
    
        console.log(newMove); // Log the newly created objects and the request body to make sure it runs smoothly
        res.redirect('/move');
    } catch (err) {
        console.log(error);
        res.status(500).send('Internal Server Error'); // Send error message if error occurs
    }
}

module.exports = create;