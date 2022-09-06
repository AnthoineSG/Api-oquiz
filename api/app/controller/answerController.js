import answerModels from "../model/answer.js";

const answerController = {
    async AllAnswer(req, res) {
        const allAnswer = await answerModels.AllAnswer();
        res.json(allAnswer);
    },

    async OneAnswer(req, res) {
        const id = parseInt(req.params.id);
        const oneAnswer = await answerModels.OneAnswer(id);
        res.json(oneAnswer);
    },

    async createAnswer(req, res) {
        const description = req.body.description;
        const questionId = req.body.questionId;
        const newAnswer = await answerModels.createAnswer(description, questionId);
        res.json(newAnswer);
    },

    async updateAnswer(req, res) {
        const id = parseInt(req.params.id);
        const description = req.body.description;
        const questionId = req.body.questionId;
        const upAnswer = await answerModels.updateAnswer(id, description, questionId);
        res.json(upAnswer);
    },

    async deleteAnswer(req, res) {
        const id = parseInt(req.params.id);
        const delAnswer = await answerModels.deleteAnswer(id);
        res.json(delAnswer);
    },
};

export default answerController;
