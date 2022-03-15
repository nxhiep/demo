const express = require("express");
const { addSetting, getSetting, updateSetting } = require("../services/setting.service");
const settingRouter = express.Router();

settingRouter.post("/add", async function (req, res) {
    let { setting } = req.body;
    if(setting) {
        res.status(200).json(await addSetting(setting));
    } else {
        res.status(400).json("400: Bad request");
    }
});

settingRouter.post("/update", async function (req, res) {
    let { setting } = req.body;
    if(setting) {
        res.status(200).json(await updateSetting(setting));
    } else {
        res.status(400).json("400: Bad request");
    }
});

settingRouter.post("/get", async function (req, res) {
    let { userId } = req.body;
    if(userId) {
        res.status(200).json(await getSetting(userId));
    } else {
        res.status(400).json("400: Bad request");
    }
});

module.exports = settingRouter;
