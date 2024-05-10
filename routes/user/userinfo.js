import { Router } from "express";
import userInfoController from "../../controllers/userinfo";

const userInfoRouter = Router();   

userInfoRouter.post("/createbio", userInfoController.createbio);
userInfoRouter.put("/updatebio/:userId", userInfoController.updatebio);

export default userInfoRouter;