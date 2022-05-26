const { Router } = require("express");
const routerQuestion = Router();

const questionController = require("../../controller/questionController");

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

module.exports = routerQuestion;