const { Router } = require("express");
const router = Router();

const levelController = require("../controller/levelController");

router.get("/", levelController.allLevel);

module.exports = router;