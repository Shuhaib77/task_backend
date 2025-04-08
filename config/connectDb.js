import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
export const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("db connected");
    })
    .catch((error) => {
      console.log(error);
    });
};
