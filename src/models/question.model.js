const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");
mongoose.Promise = global.Promise;
const questionTable = "Question";

const questionSchema = new Schema({
        question: {
            type: String,
            required: true,
        },
        createDate: {
            type: Number
        },
        lastUpdate: {
            type: Number
        },
        index: {
            type: Number,
            default: -1,
        },
        userId: {
            type: String,
            ref: "User"
        },
        options: [
            {
                text: {
                    type: String
                },
                type: {
                    type: String
                }
            }
        ],
    },
    { versionKey: false }
);
const QuestionModel = model(questionTable, questionSchema);
module.exports = QuestionModel;
