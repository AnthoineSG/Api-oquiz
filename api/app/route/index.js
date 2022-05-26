const { Router } = require("express");
const router = Router();

const routerLevel = require("./routes/level");
const routerTag = require("./routes/tag");

const {notFound} = require("../middleware/errorMiddelware");

router.use(routerLevel);
router.use(routerTag);

router.use(notFound);

module.exports = router;