const Bjj = require("./bjj")
const mongoose = require("./connection")

async function seed() {
    await Bjj.deleteMany({})

    const createdBjj = await Bjj.create(bjjs)
    console.log(createdBjj.length)
    console.log(createdBjjs[0])
}

mongoose.connection.on("open", () => {seed()})