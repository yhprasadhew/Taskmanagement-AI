const express = require("express");

const router = express.Router();

const {
  createTask,
  getTasks,
} = require("../controller/taskController");

router.post("/create", createTask);

router.get("/list", getTasks);

module.exports = router;