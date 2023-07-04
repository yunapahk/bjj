const mongoose = require('./connection')

const {Schema, model} = mongoose

const submissionSchema = new Schema ({
    name: String,
    img: String
})

const Submission = model('Submission', submissionSchema)

module.exports = Submission