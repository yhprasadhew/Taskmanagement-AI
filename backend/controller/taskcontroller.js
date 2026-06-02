const Task = require("../models/task");

// Create Task
exports.createTask = async (req, res) => {
  try {
    const {
      taskTitle,
      taskDescription,
      employeeName,
      estimatedDeadline,
      aiReason,
    } = req.body;

    const task = new Task({
      taskTitle,
      taskDescription,
      employeeName,
      estimatedDeadline,
      aiReason,
    });

    await task.save();

    res.status(201).json(task);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};