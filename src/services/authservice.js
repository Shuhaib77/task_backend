import bcrypt from "bcryptjs";
import User from "../modals/userModal.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secretKey = process.env.SECRET_KEY;

export const registerService = async (email, password, role) => {
  console.log(email, password, role, "cntrler");
  if (!email || !password || !role) {
    throw new Error("alll fields are requird!!");
  }
  const check = await User.findOne({ email: email });
  console.log(check, "kk");
  if (check) {
    throw new Error(`this user allready exists!!`);
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = User({
    email,
    password: hashPassword,
    role,
  });
  console.log(newUser);

  await newUser.save();
  return newUser;
};

export const loginService = async (email, password) => {
  console.log(email, password, "cntrler");
  if (!email || !password) {
    throw new Error("alll fields are requird!!");
  }

  const user = await User.findOne({ email: email });

  console.log(user, "kk");
  if (!user) {
    throw new Error(` user not exists!!`);
  }
  const chekPass = await bcrypt.compare(password, user.password);
  if (!chekPass) {
    throw new Error("password incoorect!!");
  }
  const payload = {
    email: email,
  };
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

  return { user, token };
};
