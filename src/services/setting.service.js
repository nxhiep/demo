const { ObjectId } = require("mongodb");
const SettingModel = require("../models/setting.model");

const addSetting = async (setting) => {
    let _setting = new SettingModel(setting);
    await _setting.save();
    return _setting;
}

const updateSetting = async (setting) => {
    await SettingModel.updateOne({ _id: new ObjectId(setting._id) }, setting);
    return setting;
}

const getSetting = async (userId) => {
    return await SettingModel.findOne({ userId: userId });
}

module.exports = { getSetting, updateSetting, addSetting };