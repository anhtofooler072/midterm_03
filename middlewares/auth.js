import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = {
  verifyToken: (req, res, next) => {
    // verify bearer token then take the userId
    try {
      const token = req.header("Authorization").split(" ")[1];
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      req.userEmail = decoded.email;
      console.log(req.userEmail);
      next();
    } catch (error) {
      res.status(400).send("Invalid token");
    }
  },
};

export default auth;
