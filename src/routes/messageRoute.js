import express from "express";
import tryCatch from "../middlewares/tryCatch.js";
import { errorHndler } from "../middlewares/globelError.js";
import { addmessage } from "../controller/message.js";

const mroute = express.Router();

mroute.post("/add_message", errorHndler, tryCatch(addmessage));
mroute.post("/get_message", errorHndler, tryCatch(addmessage));


export default mroute