const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    taskTitle: {
      type: String,
      required: true,
    },

    taskDescription: {
      type: String,
      required: true,
    },

    employeeName: {
      type: String,
      required: true,
    },

    estimatedDeadline: {
      type: String,
      default: "",
    },

    aiReason: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);