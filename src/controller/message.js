import {
  addMessageservice,
  getMessageservice,
} from "../services/messageService.js";

export const addmessage = async (req, res) => {
  const { message, username } = req.body;
  if (!message || !username) {
    res.status(404).json({ message: "all fields are requirdd!!" });
  }
  const data = await addMessageservice(message, username);

  if (!data) {
    return res.status(404).json({ message: "messaging failed!" });
  }
  res
    .status(201)
    .json({ message: "register successfull!", data: data, });
};

//getmessagee
export const getmessage = async (req, res) => {
    const { senderId, recipientId } = req.query;
    if (!senderId ||!recipientId) {
        return res.status(404).json({ message: "quary undefained!" });
      }

  const data = await getMessageservice(senderId,recipientId);
 if (!data) {
    return res.status(404).json({ message: "messaging failed!" });
  }
  res
    .status(200)
    .json({ message: "message finded successfull!", data: data, });
};

// import Message from '../models/Message.js';

// export const getMessages = async (req, res) => {
//   const { senderId, recipientId } = req.query;
//   const messages = await Message.find({
//     $or: [
//       { sender: senderId, recipient: recipientId },
//       { sender: recipientId, recipient: senderId }
//     ]
//   }).sort({ timestamp: 1 });
//   res.json(messages);
// };
