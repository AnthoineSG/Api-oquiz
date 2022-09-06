import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./app/route/index.js";

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(router);

const PORT = process.env.PORT ?? 8000;
app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});
