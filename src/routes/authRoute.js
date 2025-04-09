import express from "express";
import { login, register } from "../controller/auth.js";
import tryCatch from "../middlewares/tryCatch.js";
import { errorHndler } from "../middlewares/globelError.js";
import { addmessage } from "../controller/message.js";

 const userRoute=express.Router()
 userRoute.post("/register",errorHndler,tryCatch(register) )
 userRoute.post("/login",errorHndler,tryCatch(login) )
 export default userRoute

 