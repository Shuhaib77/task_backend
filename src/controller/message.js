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
  const data = await getMessageservice();
 if (!data) {
    return res.status(404).json({ message: "messaging failed!" });
  }
  res
    .status(200)
    .json({ message: "message finded successfull!", data: data, });
};
