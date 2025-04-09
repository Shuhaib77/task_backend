import Message from "../modals/message_modal.js";

export const addMessageservice = (message, username) => {
  try {
    if (!message || !username) {
      throw new Error("all field are requird!!");
    }
    const newmessage = Message.create({ username, message });
    return newmessage;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMessageservice = () => {
  try {
    const messages = Message.find().sort({ timestamps: 1 });
    if (!messages) {
      throw new Error("no message foundd");
    }
    return messages;
  } catch (error) {
    throw new Error(error);
  }
};
