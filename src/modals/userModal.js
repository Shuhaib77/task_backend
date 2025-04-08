import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ["user", "manager", "Admin"],
      required: true,
    },
    task: [{
      type: Schema.ObjectId,
      ref: "Task",
    }],
  },
  {timestamps:true}
);

const User = mongoose.model("User", userSchema);

export default User;
