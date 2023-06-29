const index = require("./indexRoute")
const newBjj = require("./new")
const show = require("./show")
const create = require("./create")
const edit = require("./edit")
const update = require("./update")
const destroy = require("./delete")

module exports = {
    index,
    new: newBjj,
    show,
    create,
    edit,
    update,
    destroy
}
