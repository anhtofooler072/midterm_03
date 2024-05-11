import JobInfoModel from "../models/user/jobinfo.js";
import LoginInfoModel from "../models/user/logininfo.js";

const jobInfoController = {
  createbio: async (req, res) => {
    try {
      const email = req.userEmail;
      console.log(email);
      const loginInfo = await LoginInfoModel.findOne({ email });
      const userId = loginInfo._id;
      const { project, company } = req.body;
      console.log(project, company);
      const jobInfo = new JobInfoModel({
        userId,
        project,
        company,
      });
      await jobInfo.save();
      res.status(201).send(jobInfo);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  updatebio: async (req, res) => {
    try {
      const email = req.userEmail;
      const loginInfo = await LoginInfoModel.findOne({ email });
      const userId = loginInfo._id;
      const { project, company } = req.body;
      const jobInfo = await JobInfoModel.findOne({ userId });
      jobInfo.project = project;
      jobInfo.company = company;
      await jobInfo.save();
      res.status(200).send(jobInfo);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  deletebio: async (req, res) => {
    try {
      const email = req.userEmail;
      const loginInfo = await LoginInfoModel.findOne({ email });
      const userId = loginInfo._id;
      const jobInfo = await JobInfoModel.findOneAndDelete({ userId });
      res.status(200).send(jobInfo);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

export default jobInfoController;
