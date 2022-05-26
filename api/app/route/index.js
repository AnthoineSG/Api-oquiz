const { Router } = require("express");
const router = Router();

const routerLevel = require("./routes/level");
const routerTag = require("./routes/tag");
const routerAnswer = require("./routes/answer");
const routerquestion = require("./routes/question");
const routerQuiz = require("./routes/quiz");
const routerUser = require("./routes/user");

const { notFound } = require("../middleware/errorMiddelware");

router.use(routerLevel);
router.use(routerTag);
router.use(routerAnswer);
router.use(routerquestion);
router.use(routerQuiz);
router.use(routerUser);

router.use(notFound);

module.exports = router;