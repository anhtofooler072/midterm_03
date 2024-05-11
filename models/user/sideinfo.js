import mongoose from "mongoose";

const sideInfoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    hobies: {
        type:[String],
        default: []
    },
    lifeLongGoal: {
        type: String,
        default: ""
    },
});

const SideInfoModel = mongoose.model("SideInfo", sideInfoSchema);

export default SideInfoModel;