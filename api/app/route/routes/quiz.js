const { Router } = require("express");
const routerQuiz = Router();

const quizController = require("../../controller/quizController");

/****CRUD****/

// Create
routerQuiz.post("/quiz", quizController.createQuiz);

// Read
routerQuiz.get("/quiz", quizController.allQuiz);
routerQuiz.get("/quiz/:id", quizController.oneQuiz);

// Uptdate
routerQuiz.patch("/quiz/:id", quizController.updateQuiz);

// Delete
routerQuiz.delete("/quiz/:id", quizController.deleteQuiz);

module.exports = routerQuiz;