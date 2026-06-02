const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    taskTitle: {
      type: String,
      required: true,
      unique: true,
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

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);