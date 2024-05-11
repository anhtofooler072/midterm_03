import express from "express";
import mongoose from "mongoose";
import rootRoutes from "./routes/user/rootroutes.js";
import dotenv from "dotenv";
/*------------------ DIVISION -----------------*/

dotenv.config();
const PORT = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;

await mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to MongoDB successfully");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
    console.log(error);
  });

const app = express();
app.use(express.json());
app.use("/quanganh/api", rootRoutes);

app.listen(PORT, () => {
  console.log(`Server hẳn là đang chạy ở cổng ${PORT}`);
});
