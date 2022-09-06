import { Router } from "express";
import userController from "../../controller/userController.js";

const routerUser = Router();

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

export default routerUser;