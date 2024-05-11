import { Router } from "express";
import userInfoRouter from "./userinfo.js";
import loginRouter from "./login.js";
import jobInfoRouter from "./jobinfo.js";

const rootRoutes = Router();

rootRoutes.use("/user", userInfoRouter)
rootRoutes.use("/user", loginRouter)
rootRoutes.use("/user", jobInfoRouter)

export default rootRoutes;