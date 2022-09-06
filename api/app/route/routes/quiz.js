import { Router } from "express";
import quizController from "../../controller/quizController.js";

const routerQuiz = Router();

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

export default routerQuiz;