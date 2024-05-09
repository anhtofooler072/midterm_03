import mongoose from "mongoose";

const sideInfoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    hobies: {
        type:[String],
        default: []
    },
    lifelonggoals: {
        type: String,
        default: ""
    },
});

const SideInfoModel = mongoose.model("SideInfo", sideInfoSchema);

export default SideInfoModel;