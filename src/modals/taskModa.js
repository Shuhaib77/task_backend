import mongoose, { Schema } from "mongoose";

const taskSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    status: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("User", taskSchema);

export default Task;
