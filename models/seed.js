const Movement = require('./movement');

const mongoose = require('./connection');

const movements = require('./seedData');

async function seed() { // populate database
    await Move.deleteMany({});
   
    const createdMoves = await Movement.create(movements); // Insert seed data

    console.log(createdMoves.length);
    console.log(createdMoves[0]);
}

mongoose.connection.on("open", () => {seed()}) // Run seed function when database connection is open