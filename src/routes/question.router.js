const express = require("express");
const { addQuestions, getQuestionById, getQuestionsByUserId } = require("../services/question.service");
const questionRouter = express.Router();

questionRouter.post("/adds", async function (req, res) {
    let questions = req.body;
    if(questions && questions.length > 0) {
        res.status(200).json(await addQuestions(questions));
    } else {
        res.status(400).json("400: Bad request");
    }
});

questionRouter.post("/updates", async function (req, res) {
    let questions = req.body;
    if(questions && questions.length > 0) {
        res.status(200).json(await updateQuestions(questions));
    } else {
        res.status(400).json("400: Bad request");
    }
});

questionRouter.post("/get-by-id", async function (req, res) {
    let { id } = req.body;
    if(id) {
        res.status(200).json(await getQuestionById(id));
    } else {
        res.status(400).json("400: Bad request");
    }
});

questionRouter.post("/get-by-user-id", async function (req, res) {
    let { userId } = req.body;
    if(userId) {
        res.status(200).json(await getQuestionsByUserId(userId));
    } else {
        res.status(400).json("400: Bad request");
    }
});

module.exports = questionRouter;
