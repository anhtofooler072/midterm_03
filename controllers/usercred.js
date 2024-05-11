import LoginInfoModel from "../models/user/logininfo.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userCredController = {
    createNewUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const loginInfo = new LoginInfoModel({
                email,
                password: hashedPassword,
                salt,
            });
            await loginInfo.save();
            res.status(201).send(loginInfo);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    tokenize: async (req, res) => {
        try {
            const { email, password } = req.body;
            const loginInfo = await LoginInfoModel.findOne({ email });
            if (!loginInfo) {
                return res.status(400).send("Email không tồn tại");
            }
            const hashedPassword = await bcrypt.hash(password, loginInfo.salt);
            if (hashedPassword !== loginInfo.password) {
                return res.status(400).send("Mật khẩu không đúng");
            }
            const token = jwt.sign({ email }, process.env.TOKEN_SECRET);
            res.status(200).send(token);
        } catch (error) {
            res.status
        }
    },
};

export default userCredController;