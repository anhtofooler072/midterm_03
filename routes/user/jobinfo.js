import { Router } from "express";
import jobInfoController from "../../controllers/jobinfo.js";
import auth from "../../middlewares/auth.js";

const jobInfoRouter = Router();

jobInfoRouter.post("/createjob", auth.verifyToken, jobInfoController.createbio);
jobInfoRouter.put("/updatejob", auth.verifyToken, jobInfoController.updatebio);
jobInfoRouter.delete("/deletejob", auth.verifyToken, jobInfoController.deletebio);

export default jobInfoRouter;
