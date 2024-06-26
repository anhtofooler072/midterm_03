import { Router } from "express";
import userCredController from "../../controllers/usercred.js";

const loginRouter = Router();

loginRouter.post("/register", userCredController.createNewUser);
loginRouter.post("/login", userCredController.tokenize);

export default loginRouter;