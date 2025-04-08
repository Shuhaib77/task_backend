import express from "express";
import cors from "cors";
import { db } from "../config/connectDb.js";
import userRoute from "./routes/authRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
db();
app.use("/api", userRoute);
export default app;
