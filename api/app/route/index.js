const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.send("fk,");
});

module.exports = router;