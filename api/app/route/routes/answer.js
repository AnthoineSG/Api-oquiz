const { Router } = require("express");
const routerAnswer = Router();

const answerController = require("../../controller/answerController");

/****CRUD****/

// Create
routerAnswer.post("/answer", answerController.createAnswer);

// Read
routerAnswer.get("/answer", answerController.AllAnswer);
routerAnswer.get("/answer/:id", answerController.OneAnswer);

// Uptdate
routerAnswer.patch("/answer/:id", answerController.updateAnswer);

// Delete
routerAnswer.delete("/answer/:id", answerController.deleteAnswer);

module.exports = routerAnswer;