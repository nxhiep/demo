const express = require("express");
const { getUserInfo } = require("../services/user.service");
const userRouter = express.Router();

userRouter.post("/info", async function (req, res) {
    let { email, userId, name } = req.body;
    if(email) {
        res.status(200).json(await getUserInfo(email, userId, name));
    } else {
        res.status(400).json("400: Bad request");
    }
});

module.exports = userRouter;
