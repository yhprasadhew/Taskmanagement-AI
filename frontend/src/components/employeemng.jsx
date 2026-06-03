import axios from "axios";
import { useState } from "react";

const EmployeeMng = () => {
  const [empId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empSkills, setEmpSkills] = useState("");

  const handleAddEmp = async (e) => {
    e.preventDefault();

    try {
      const skillsArray = empSkills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill !== "");

//frontend connect
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/employee/create`,
        {
          empId,
          empName,
          empSkills: skillsArray,
        }
      );
     

      console.log("Employee Added:", res.data);

      // Clear form
      setEmpId("");
      setEmpName("");
      setEmpSkills("");

      alert("Employee added successfully!");
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Failed to add employee");
    }
  };

  return (
    <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8 flex-1 max-w-md">
      <h2 className="text-xl font-bold mb-6 text-gray-800 text-center">
        Add Employee
      </h2>

      <form onSubmit={handleAddEmp}>
        <div className="mb-4">
          <label className="block mb-1.5 text-sm font-semibold text-gray-600">
            Enter Employee ID
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700"
            type="text"
            placeholder="e.g. EMP-101"
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1.5 text-sm font-semibold text-gray-600">
            Enter Employee Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700"
            type="text"
            placeholder="John Doe"
            value={empName}
            onChange={(e) => setEmpName(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1.5 text-sm font-semibold text-gray-600">
            Enter Employee Skills
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700"
            type="text"
            placeholder="React, Node.js, MongoDB"
            value={empSkills}
            onChange={(e) => setEmpSkills(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-medium px-4 py-3 rounded-lg hover:bg-blue-700 transition-all w-full"
        >
          Add New Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeMng;