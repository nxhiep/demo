const QuestionModel = require("../models/question.model");

const addQuestions = async (questions) => {
    return await QuestionModel.insertMany(questions);
}

const getQuestionById = async (id) => {
    return await QuestionModel.findById(id);
}

const getQuestionsByUserId = async (userId) => {
    return await QuestionModel.find({ userId: userId });
}

module.exports = { addQuestions, getQuestionById, getQuestionsByUserId };