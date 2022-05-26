const { Router } = require("express");
const routerTag = Router();

const tagContoller = require("../../controller/tagController");

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

module.exports = routerTag;