import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    message: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
