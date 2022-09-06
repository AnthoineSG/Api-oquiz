import { Router } from "express";
import levelController from "../../controller/levelController.js";

const routerLevel = Router();

/****CRUD****/

// Create
routerLevel.post("/level", levelController.createLevel);

// Read
routerLevel.get("/level", levelController.allLevel);
routerLevel.get("/level/:id", levelController.oneLevel);

// Uptdate
routerLevel.patch("/level/:id", levelController.updateLevel);

// Delete
routerLevel.delete("/level/:id", levelController.deleteLevel);

export default routerLevel;