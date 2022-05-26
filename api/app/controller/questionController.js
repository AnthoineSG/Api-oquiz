const questionModels = require("../model/models/question");

const questionContoller = {

    async allQuestion(req, res) {
        const allQuestion = await questionModels.AllQuestion();
        res.json(allQuestion);
    },

    async oneQuestion(req, res) {
        const id = parseInt(req.params.id);
        const oneQuestion = await questionModels.OneQuestion(id);
        res.json(oneQuestion);
    },

    async createQuestion(req, res) {
        const { question, anecdote, wiki, levelId, answerId, quizId } = req.body;
        const newQuestion = await questionModels.createQuestion(question, anecdote, wiki, levelId, answerId, quizId);
        res.json(newQuestion);
    },

    async updateQuestion(req, res) {
        const id = parseInt(req.params.id);
        const { question, anecdote, wiki, levelId, answerId, quizId } = req.body;
        const upQuestion = await questionModels.updateQuestion(id, question, anecdote, wiki, levelId, answerId, quizId);
        res.json(upQuestion);
    },

    async deleteQuestion(req, res) {
        const id = parseInt(req.params.id);
        const delQuestion = await questionModels.deleteQuestion(id);
        res.json(delQuestion);
    },
};

module.exports = questionContoller;