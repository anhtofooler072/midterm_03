import { Router } from "express";
import stalking from "../../controllers/goodstaker.js";

const socialRouter = Router();

socialRouter.get("/find/:email", stalking.findpeople);

export default socialRouter;