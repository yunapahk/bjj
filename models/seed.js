const Position = require('./position');
const Movement = require('./movement');
const Submission = require('./submission');

const mongoose = require('./connection');

const positions = require('./seedData');
const movements = require('./seedData');
const submissions = require('./seedData');

async function seed() {
    await Position.deleteMany({});
    await Movement.deleteMany({});
    await Submission.deleteMany({});

    const createdPositions = await Position.create(positions);
    const createdMovements = await Movement.create(movements);
    const createdSubmissions = await Submission.create(submissions);

    console.log(createdPositions.length);
    console.log(createdPositions[0]);

    console.log(createdMovements.length);
    console.log(createdPositions[0]);

    console.log(createdSubmissions.length);
    console.log(createdPositions[0]);
}

mongoose.connection.on("open", () => {seed()})