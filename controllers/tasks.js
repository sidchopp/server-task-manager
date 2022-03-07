const getAllTasks = (req, res) => {
  res.send("<h1>All Tasks..</h1>");
};

const createTask = (req, res) => {
  // res.send("Create a Task.")
  // console.log(req.body);
  res.json(req.body)
};

const getTask = (req, res) => {
  // console.log(req.params);
  const { id } = req.params
  console.log(id);
  // res.send("Get a Task.")
  res.json({ id: id })
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