const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");
mongoose.Promise = global.Promise;
const settingTable = "Setting";

const settingSchema = new Schema({
        language: {
            type: String,
            required: true,
        },
        sound: {
            type: Boolean
        },
        createDate: {
            type: Number
        },
        lastUpdate: {
            type: Number
        },
        userId: {
            type: String,
            ref: "User"
        },
        colorSchemes: [String]
    },
    { versionKey: false }
);
const SettingModel = model(settingTable, settingSchema);
module.exports = SettingModel;
