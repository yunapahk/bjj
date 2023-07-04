const index = require("./indexRoute") 
const { newPosition, newMovement, newSubmission } = require("./new");
const show = require("./show")
const create = require("./create")
const edit = require("./edit")
const update = require("./update")
const destroy = require("./delete")

module.exports = {
    index,
    new: {
        newPosition, 
        newMovement, 
        newSubmission,
    },
    show,
    create,
    edit,
    update,
    destroy
}
