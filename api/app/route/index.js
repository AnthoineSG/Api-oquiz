const { Router } = require("express");
const router = Router();

const levelController = require("../controller/levelController");

router.get("/level", levelController.allLevel);
router.get("/level/:id", levelController.oneLevel);

module.exports = router;