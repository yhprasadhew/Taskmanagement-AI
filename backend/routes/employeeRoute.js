
const express = require("express");
const router = express.Router();

const {
  createEmp,
  getEmp,
  getAllEmp,
} = require("../controller/empcontroller");

// Create Employee
router.post("/create", createEmp);

// Get All Employees
router.get("/empList", getAllEmp);

// Get Employee By ID
router.get("/:id", getEmp);

module.exports = router;