import express from "express";
import cors from "cors";
import { db } from "../config/connectDb.js";
import userRoute from "./routes/authRoute.js";
import mroute from "./routes/messageRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
db();
app.use("/api", userRoute);
app.use("/api", mroute);
export default app;
