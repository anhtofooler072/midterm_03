import { Router } from "express";
import auth from "../../middlewares/auth.js";
import sideInfoController from "../../controllers/sideinfo.js";

const sideInfoRouter = Router();

sideInfoRouter.post("/createsideinfo", auth.verifyToken, sideInfoController.createbio);
sideInfoRouter.put("/updatesideinfo", auth.verifyToken, sideInfoController.updatebio);
sideInfoRouter.delete("/deletesideinfo", auth.verifyToken, sideInfoController.deletebio);

export default sideInfoRouter