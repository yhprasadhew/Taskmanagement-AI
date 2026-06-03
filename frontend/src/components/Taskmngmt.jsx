import { useState } from "react";
import axios from "axios";

const TaskMng = ({ employees }) => {
const [taskTitle, setTaskTitle] = useState("");
const [taskDescription, setTaskDescription] = useState("");
const [selectedEmployee, setSelectedEmployee] = useState("");
const [aiResult, setAiResult] = useState(null);

// AI Suggest Employee
const handleAISuggestion = async () => {
if (!taskTitle.trim() || !taskDescription.trim()) {
alert("Please enter Task Title and Task Description first");
return;
}


try {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/ai/recommend`,
    {
     
      taskTitle,
      taskDescription,
    }
  );

  console.log("AI Response:", res.data);

  setAiResult(res.data);

  // Auto-select recommended employee
  if (res.data.employeeId) {
    setSelectedEmployee(res.data.employeeId);
  }
} catch (error) {
  console.error("FULL ERROR:", error);

  console.log("Status:", error.response?.status);
  console.log("Data:", error.response?.data);

  alert(
    error.response?.data?.message ||
      "Failed to get AI recommendation"
  );
}


};

// Save Task
const handleAssignTask = async (e) => {
e.preventDefault();


try {
  const employee = employees.find(
    (emp) => emp.empId === selectedEmployee
  );

  const taskData = {
    taskTitle,
    taskDescription,
    employeeName: employee?.empName,
    estimatedDeadline: aiResult?.deadline || "",
    priority: aiResult?.priority || "",
    aiReason: aiResult?.reason || "",
  };

  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/task/create`,
    taskData
  );

  console.log("Task Saved:", res.data);

  alert("Task Assigned Successfully!");

  // Reset Form
  setTaskTitle("");
  setTaskDescription("");
  setSelectedEmployee("");
  setAiResult(null);
} catch (error) {
  console.error("Task Save Error:", error);

  alert(
    error.response?.data?.message ||
      "Failed to save task"
  );
}


};

return ( <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8 flex-1 max-w-md flex flex-col justify-between"> <form onSubmit={handleAssignTask}> <h2 className="text-xl font-bold mb-6 text-gray-800 text-center tracking-tight">
Assign Task to Employee </h2>


    {/* Task Title */}
    <div className="mb-4">
      <label className="block mb-1.5 text-sm font-semibold text-gray-600">
        Enter Task Title
      </label>

      <input
        type="text"
        placeholder="Fix Dashboard Bug"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        required
      />
    </div>

    {/* Task Description */}
    <div className="mb-4">
      <label className="block mb-1.5 text-sm font-semibold text-gray-600">
        Enter Task Description
      </label>

      <textarea
        placeholder="Describe the objective..."
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        required
      />
    </div>

    {/* Employee Dropdown */}
    <div className="mb-4">
      <label className="block mb-1.5 text-sm font-semibold text-gray-600">
        Select Employee
      </label>

      <select
        value={selectedEmployee}
        onChange={(e) => setSelectedEmployee(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        required
      >
        <option value="">
          Choose an employee
        </option>

        {employees.map((emp) => (
          <option key={emp._id} value={emp.empId}>
            {emp.empName}
          </option>
        ))}
      </select>
    </div>

    {/* AI Suggest Button */}
    <button
      type="button"
      onClick={handleAISuggestion}
      className="bg-blue-600 text-white font-medium px-4 py-3 rounded-lg hover:bg-blue-700 transition-all w-full mb-4"
    >
      🤖 AI Suggest Employee
    </button>

    {/* AI Recommendation */}
    {aiResult && (
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-bold text-blue-800 mb-2">
          AI Recommendation
        </h3>

        <p>
          <strong>Employee:</strong>{" "}
          {aiResult.employeeName}
        </p>

        <p>
          <strong>Deadline:</strong>{" "}
          {aiResult.deadline}
        </p>

        <p>
          <strong>Priority:</strong>{" "}
          {aiResult.priority}
        </p>

        <p>
          <strong>Reason:</strong>{" "}
          {aiResult.reason}
        </p>
      </div>
    )}

    {/* Assign Task */}
    <button
      type="submit"
      className="bg-emerald-600 text-white font-medium px-4 py-3 rounded-lg hover:bg-emerald-700 active:scale-[0.99] transition-all w-full shadow-sm shadow-emerald-200"
    >
      Assign Task
    </button>
  </form>
</div>


);
};

export default TaskMng;
