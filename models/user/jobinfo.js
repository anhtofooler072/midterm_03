import mongoose from "mongoose";

const jobInfoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
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
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
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
    startDate: Date,
    endDate: Date,
    website: String,
  },
});

const JobInfoModel = mongoose.model("JobInfo", jobInfoSchema);

export default JobInfoModel;
