import { Router } from "express";
import tagContoller from "../../controller/tagController.js";

const routerTag = Router();

// CRUD

// CREATE
routerTag.post("/tags", tagContoller.createTag);

// READ
routerTag.get("/tags", tagContoller.getAllTags);
routerTag.get("/tags/:id", tagContoller.getOneTag);

// UPDATE
routerTag.patch("/tags/:id", tagContoller.updateTag);

// DELETE
routerTag.delete("/tags/:id", tagContoller.deleteTag);

export default routerTag;