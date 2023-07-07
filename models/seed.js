const Move = require('./move');
const mongoose = require('./connection');
const moves = require('./seedData');

async function seed() { // populate database
    await Move.deleteMany({});
   
    const createdMoves = await Move.create(moves); // Insert seed data
    console.log(createdMoves.length);
    console.log(createdMoves[0]);
}

mongoose.connection.on("open", () => {seed()}) // Run seed function when database connection is open