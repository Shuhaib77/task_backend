import Task from "../modals/taskModa";
import User from "../modals/userModal";

export const addTask = async (heading, description, id) => {
  if (!heading || !description || !id) {
    throw new Error("all filds requird!!");
  }
  const checkTask = await Task.findOne({ heading: heading });
  if (checkTask) {
    throw new Error("this task allredy assigned");
  }
  const user = await User.findByid(id);
  if (!user) {
    throw new Error("user not exist");
  }

  const newTask = Task({
    heading,
    description,
    user: user._id,
  });
  await newTask.save();
  user.task = newTask._id;
  await user.save();
  console.log(user, "userrr");
  console.log(newTask, "taskk");

  return newTask;
};
