import express from 'express';
import mongoose from 'mongoose';
import rootRoutes from './routes/user/rootroutes.js';
/*------------------ DIVISION -----------------*/

const PORT = 3000;

const app = express();
app.use(express.json());
app.use("/quanganh/api", rootRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
