import mongoose from "mongoose";

const loginInfoSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    salt: String,
});

const LoginInfoModel = mongoose.model("User", loginInfoSchema);

export default LoginInfoModel;