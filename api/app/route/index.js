const { Router } = require("express");
const router = Router();

const routerLevel = require("./routes/level");

const {notFound} = require("../middleware/errorMiddelware");

router.use(routerLevel);

router.use(notFound);

module.exports = router;