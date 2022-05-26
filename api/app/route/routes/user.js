const { Router } = require("express");
const routerUser = Router();

const userController = require("../../controller/userController");

/****CRUD****/

// Create
routerUser.post("/user", userController.createUser);

// Read
routerUser.get("/user", userController.allUser);
routerUser.get("/user/:id", userController.oneUser);

// Uptdate
routerUser.patch("/user/:id", userController.updateUser);

// Delete
routerUser.delete("/user/:id", userController.deleteUser);

module.exports = routerUser;