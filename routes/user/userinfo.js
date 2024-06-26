import { Router } from "express";
import userInfoController from "../../controllers/userinfo.js";
import auth from "../../middlewares/auth.js";

const userInfoRouter = Router();   

userInfoRouter.post("/createbio", auth.verifyToken, userInfoController.createbio);
userInfoRouter.put("/updatebio", auth.verifyToken, userInfoController.updatebio);
userInfoRouter.delete("/deletebio", auth.verifyToken, userInfoController.deletebio);

export default userInfoRouter;