const Move = require("../../models/move")

async function create(req, res) {
    let newPosition = {
        name: req.body.positionName,
        img: req.body.positionImg
    };

    let newMovement = {
        name: req.body.movementName,
        img: req.body.movementImg
    };

    let newSubmission = {
        name: req.body.submissionName,
        img: req.body.submissionImg
    };

    const position = await Move.create(newPosition);
    const movement = await Move.create(newMovement);
    const submission = await Move.create(newSubmission);

    console.log(newPosition, newMovement, newSubmission, req.body);
    res.redirect("/move");
}

module.exports = create;