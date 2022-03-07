const getAllTasks = (req, res) => {
  res.send("<h1>All Tasks..</h1>");
};

const createTask = (req, res) => {
  res.send("Create a Task")
};

const getTask = (req, res) => {
  res.send("Get a Task")
};

const updateTask = (req, res) => {
  res.send("Update a Task")
};

const deleteTask = (req, res) => {
  res.send("Delete a Task")
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};