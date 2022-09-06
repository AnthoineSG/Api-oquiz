import { Router } from "express";
import answerController from "../../controller/answerController.js";

const routerAnswer = Router();

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

export default routerAnswer;