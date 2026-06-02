const Employee = require("../models/emp");

// Create Employee
exports.createEmp = async (req, res) => {
  try {
    const { empId, empName, empSkills } = req.body;

    const employee = new Employee({
      empId,
      empName,
      empSkills,
    });

    await employee.save();

    res.status(201).json(employee);
  } catch (error) {
    console.log("Error while saving employee:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get Employee by ID
exports.getEmp = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json(employee);
  } catch (error) {
    console.log("Error while fetching employee:", error);
    res.status(500).json({ message: error.message });
  }
};