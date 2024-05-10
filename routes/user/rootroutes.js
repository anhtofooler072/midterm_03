import { Router } from "express";
import userInfoRouter from "./userinfo";

const rootRoutes = Router();

rootRoutes.use("/user", userInfoRouter)

export default rootRoutes;