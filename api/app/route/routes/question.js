import { Router } from "express";
import questionController from "../../controller/questionController.js";

const routerQuestion = Router();

/****CRUD****/

// Create
routerQuestion.post("/question", questionController.createQuestion);

// Read
routerQuestion.get("/question", questionController.allQuestion);
routerQuestion.get("/question/:id", questionController.oneQuestion);

// Uptdate
routerQuestion.patch("/question/:id", questionController.updateQuestion);

// Delete
routerQuestion.delete("/question/:id", questionController.deleteQuestion);

export default routerQuestion;