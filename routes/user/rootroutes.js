import { Router } from "express";
import userInfoRouter from "./userinfo.js";
import loginRouter from "./login.js";

const rootRoutes = Router();

rootRoutes.use("/user", userInfoRouter)
rootRoutes.use("/user", loginRouter)

export default rootRoutes;