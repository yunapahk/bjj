const Move = require("./move")
const mongoose = require("./connection")
const moves = require('/seedData')

async function seed() {
    await Move.deleteMany({})

    const createdMove = await Move.create(moves)
    console.log(createdMoves.length)
    console.log(createdMoves[0])
}

mongoose.connection.on("open", () => {seed()})