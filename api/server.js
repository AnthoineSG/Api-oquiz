require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./app/route/index");

app.use(router);

const PORT = process.env.PORT ?? 8000;
app.listen(PORT, _ => {
    console.log(`Server start on http://localhost:${PORT}`);
});