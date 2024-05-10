import UserInfoModel from "../models/user/userInfo";

const userInfoController = {
    createbio: async (req, res) => {
        try {
            const { userId, name, dob, nation, hometown, education } = req.body;
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
            const { userId } = req.params;
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