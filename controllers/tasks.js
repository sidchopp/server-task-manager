const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks }) //using ES6, if property name is equal to the value
  } catch (error) {
    res.status(500).json({ message: error })
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    // res.send("Create a Task.")
    // console.log(req.body);
    res.status(201).json({ task })

  } catch (error) {
    res.status(500).json({ message: error })
  }
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