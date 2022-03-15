const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");
mongoose.Promise = global.Promise;
const userTable = "User";

const userSchema = new Schema(
    {
        userId: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
        },
        avatar: {
            type: String
        },
        name: {
            type: String,
            required: false,
        },
        createDate: {
            type: Number
        },
        lastUpdate: {
            type: Number
        },
    },
    { versionKey: false }
);
const UserModel = model(userTable, userSchema);
module.exports = UserModel;