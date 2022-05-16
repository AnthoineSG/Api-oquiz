const { Router } = require("express");
const routerLevel = Router();

const levelController = require("../../controller/levelController");

routerLevel.get("/level", levelController.allLevel);
routerLevel.get("/level/:id", levelController.oneLevel);

module.exports = routerLevel;