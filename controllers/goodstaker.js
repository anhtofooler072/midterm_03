import SideInfoModel from "../models/user/sideinfo.js";
import UserInfoModel from "../models/user/userInfo.js";
import JobInfoModel from "../models/user/jobinfo.js";
import LoginInfoModel from "../models/user/logininfo.js";

const stalking = {
  findpeople: async (req, res) => {
    try {
      const { email } = req.params;
      console.log(email);
      if (!email) {
        throw new Error("Email is required");
      }
      const loginInfo = await LoginInfoModel.findOne({ email });
      const userId = loginInfo._id;
      const userinfo = await UserInfoModel.findOne({ userId });
      const sideinfo = await SideInfoModel.findOne({ userId });
      const jobinfo = await JobInfoModel.findOne({ userId });
      const result = {
        userinfo,
        sideinfo,
        jobinfo,
      };
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

export default stalking;
