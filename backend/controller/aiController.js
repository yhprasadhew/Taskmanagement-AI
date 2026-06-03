const Employee = require("../models/emp");
const getAISuggestion = require("../services/geminiService");

exports.recommendEmployee = async (req, res) => {
  try {
    const { taskTitle, taskDescription } = req.body;

    if (!taskTitle || !taskDescription) {
      return res.status(400).json({
        message: "Task title and description are required",
      });
    }

    const employees = await Employee.find();

    if (employees.length === 0) {
      return res.status(404).json({
        message: "No employees found",
      });
    }

    const employeeList = employees
      .map(
        (emp) =>
          `ID: ${emp.empId}
Name: ${emp.empName}
Skills: ${emp.empSkills.join(", ")}`
      )
      .join("\n\n");

    const prompt = `
You are an expert project manager AI.

Task Title:
${taskTitle}

Task Description:
${taskDescription}

Available Employees:
${employeeList}

Instructions:

1. Analyze the task.
2. Select the best employee based on skills.
3. Estimate a realistic deadline.
4. Set a priority (Low, Medium, High).
5. Explain the reason.
6. Return ONLY valid JSON.

JSON FORMAT:

{
  "employeeId": "",
  "employeeName": "",
  "deadline": "",
  "priority": "",
  "reason": ""
}
`;

    const result = await getAISuggestion(prompt);

    console.log("=========== GEMINI RESPONSE ===========");
    console.log(result);
    console.log("=======================================");

    const jsonMatch = result.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      throw new Error("No valid JSON found in AI response");
    }

    const aiResponse = JSON.parse(jsonMatch[0]);

    res.status(200).json(aiResponse);
  } catch (error) {
    console.error("AI Recommendation Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};