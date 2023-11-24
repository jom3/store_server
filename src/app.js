import express from "express";
import cors from "cors";
import morgan from "morgan";
import { appRoutes } from "./routes/app.routes.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use(appRoutes)

app.listen(port, () => console.log(`Server running on port ${port}!!!!`));
