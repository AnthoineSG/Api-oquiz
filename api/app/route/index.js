import { Router } from "express";

import routerLevel from "./routes/level.js";
import routerTag from "./routes/tag.js";
import routerAnswer from "./routes/answer.js";
import routerQuestion from "./routes/question.js";
import routerQuiz from "./routes/quiz.js";
import routerUser from "./routes/user.js";
import { notFound } from "../middleware/errorMiddelware.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Hello" });
});

router.use(routerLevel);
router.use(routerTag);
router.use(routerAnswer);
router.use(routerQuestion);
router.use(routerQuiz);
router.use(routerUser);

router.use(notFound);

export default router;