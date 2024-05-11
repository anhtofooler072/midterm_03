import LoginInfoModel from "../models/user/logininfo";

const userCredController = {
    createNewUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            const loginInfo = new LoginInfoModel({
                email,
                password,
            });
            await loginInfo.save();
            res.status(201).send(loginInfo);
        } catch (error) {
            res.status(400).send(error);
        }
    }
};

export default userCredController;