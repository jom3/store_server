import { Router } from "express";


const appRoutes = Router()

appRoutes.get("/", (req, res) => res.send("Hello World!"));

export { appRoutes }