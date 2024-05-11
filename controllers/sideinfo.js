import LoginInfoModel from "../models/user/logininfo.js";
import SideInfoModel from "../models/user/sideinfo.js";

const sideInfoController = {
  createbio: async (req, res) => {
    try {
      const email = req.userEmail;
      const logininfo = await LoginInfoModel.findOne({ email });
      const userId = logininfo._id;
      const { hobies, lifeLongGoal } = req.body;
      const sideInfo = new SideInfoModel({
        userId,
        hobies,
        lifeLongGoal,
      });
      await sideInfo.save();
      res.status(201).send(sideInfo);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  updatebio: async (req, res) => {
    try {
      const email = req.userEmail;
      const logininfo = await LoginInfoModel.findOne({ email });
      const userId = logininfo._id;
      const { hobies, lifeLongGoal } = req.body;
      const sideInfo = await SideInfoModel.findOne({ userId });
      sideInfo.hobies = hobies;
      sideInfo.lifeLongGoal = lifeLongGoal;
      await sideInfo.save();
      res.status(200).send(sideInfo);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  deletebio: async (req, res) => {
    try {
      const email = req.userEmail;
      const logininfo = await LoginInfoModel.findOne({ email });
      const userId = logininfo._id;
      const sideInfo = await SideInfoModel.findOneAndDelete({ userId });
      res.status(200).send(sideInfo);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

export default sideInfoController;
