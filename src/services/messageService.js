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

export const getMessageservice = async( senderId, recipientId) => {
  try {
    const messages = await Message.find({
        $or: [
          { sender: senderId, recipient: recipientId },
          { sender: recipientId, recipient: senderId }
        ]
      }).sort({ timestamp: 1 });
    if (!messages) {
      throw new Error("no message foundd");
    }
    return messages;
  } catch (error) {
    throw new Error(error);
  }
};
