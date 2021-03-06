const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    questionName: String,
    questionUrl: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "answers"
    }
})

module.exports = mongoose.model("questions", QuestionSchema)