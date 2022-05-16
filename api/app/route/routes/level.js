const { Router } = require("express");
const routerLevel = Router();

const levelController = require("../../controller/levelController");

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

module.exports = routerLevel;