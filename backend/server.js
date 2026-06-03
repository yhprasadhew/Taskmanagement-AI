const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const empRoutes = require("./routes/employeeRoute");
const taskRoutes = require("./routes/taskRoute");
const aiRoutes = require("./routes/aiRoute");

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Error:", error);
  });

// API Routes
app.use("/api/employee", empRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend Running");
});
console.log("PORT =", process.env.PORT);
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});