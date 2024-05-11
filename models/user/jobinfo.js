import mongoose from "mongoose";

const jobInfoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  project: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    role: String,
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
  },
  company: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    startDate: String,
    endDate: String,
    website: String,
  },
});

const JobInfoModel = mongoose.model("JobInfo", jobInfoSchema);

export default JobInfoModel;
