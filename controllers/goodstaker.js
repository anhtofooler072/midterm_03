import SideInfoModel from "../models/user/sideinfo.js";
import UserInfoModel from "../models/user/userInfo.js";
import JobInfoModel from "../models/user/jobinfo.js";
import LoginInfoModel from "../models/user/logininfo.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro"});

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
  GeminiAsking: async (req, res) => {
    try {
      const { content } = req.body;
      if (!content) {
        throw new Error("Content is required");
      }
      console.log(content);
      const result = await model.generateContent(content);
      const response = await result.response;
      res.status(200).send(response.text());
    } catch (error) {
      res.status(400).send(error);
    }
  }
};

export default stalking;
