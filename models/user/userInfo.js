import mongoose from "mongoose";

const useInfoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  nation: {
    type: String,
    required: true,
  },
  hometown: {
    type: String,
    required: true,
  },
  education: String,
});

const UserInfoModel = mongoose.model("UserInfo", useInfoSchema);

export default UserInfoModel;
