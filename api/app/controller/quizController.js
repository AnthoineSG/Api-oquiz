import quizModels from "../model/models/quiz.js";

const quizController = {
    async allQuiz(req, res) {
        const allQuiz = await quizModels.allQuiz();
        res.json(allQuiz);
    },

    async oneQuiz(req, res) {
        const id = parseInt(req.params.id);
        const oneQuiz = await quizModels.oneQuiz(id);
        res.json(oneQuiz);
    },

    async createQuiz(req, res) {
        const { title, description, userId } = req.body;
        const newQuiz = await quizModels.createQuiz(title, description, userId);
        res.json(newQuiz);
    },

    async updateQuiz(req, res) {
        const id = parseInt(req.params.id);
        const { title, description, userId } = req.body;
        const upQuiz = await quizModels.updateQuiz(id, title, description, userId);
        res.json(upQuiz);
    },

    async deleteQuiz(req, res) {
        const id = parseInt(req.params.id);
        const delQuiz = await quizModels.deleteQuiz(id);
        res.json(delQuiz);
    },
};

export default quizController;