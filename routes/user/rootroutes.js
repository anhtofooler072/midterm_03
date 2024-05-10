import { Router } from "express";
import userInfoRouter from "./userinfo.js";

const rootRoutes = Router();

rootRoutes.use("/user", userInfoRouter)

export default rootRoutes;