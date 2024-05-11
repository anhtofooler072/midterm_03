import UserInfoModel from "../models/user/userInfo.js";
import LoginInfoModel from "../models/user/logininfo.js";

const userInfoController = {
  createbio: async (req, res) => {
    try {
      const email = req.userEmail;
      console.log(email);
      const { name, dob, nation, hometown, education } = req.body;
      // find the userId in loginInfo through email
      const loginInfo = await LoginInfoModel.findOne({ email });
      const userId = loginInfo._id;
      const userInfo = new UserInfoModel({
        userId,
        name,
        dob,
        nation,
        hometown,
        education,
      });  
      await userInfo.save();
      res.status(201).send(userInfo);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  updatebio: async (req, res) => {
    try {
      const email = req.userEmail;
      const loginInfo = await LoginInfoModel.findOne({ email });
      const userId = loginInfo._id;
      const { name, dob, nation, hometown, education } = req.body;
      const userInfo = await UserInfoModel.findOne({ userId });
      userInfo.name = name;
      userInfo.dob = dob;
      userInfo.nation = nation;
      userInfo.hometown = hometown;
      userInfo.education = education;
      await userInfo.save();
      res.status(200).send(userInfo);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

export default userInfoController;
