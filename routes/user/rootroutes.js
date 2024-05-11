import { Router } from "express";
import userInfoRouter from "./userinfo.js";
import loginRouter from "./login.js";
import jobInfoRouter from "./jobinfo.js";
import sideInfoRouter from "./sideinfo.js";
import socialRouter from "../social/social.js";

const rootRoutes = Router();

rootRoutes.use("/user", userInfoRouter)
rootRoutes.use("/user", loginRouter)
rootRoutes.use("/user", jobInfoRouter)
rootRoutes.use("/user", sideInfoRouter)
rootRoutes.use("/social", socialRouter)

export default rootRoutes;