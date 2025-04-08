import User from "../modals/userModal";
import { addTask } from "../services/taskservice";

const createTask = async(req, res) => {
  const { heading, description } = req.body;
  const {id}=req.params
  if (!heading || !description || !id) {
    return res.status(404).json({ message: "all fields are requird!" });
  }
  const data= await addTask()
};
