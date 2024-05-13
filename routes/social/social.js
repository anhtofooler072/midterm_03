import { Router } from "express";
import stalking from "../../controllers/goodstaker.js";

const socialRouter = Router();

socialRouter.get("/find/:email", stalking.findpeople);
socialRouter.post("/gemini", stalking.GeminiAsking);

export default socialRouter;