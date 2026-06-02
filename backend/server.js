const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const empRoutes = require("./routes/employeeRoute");

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Error:", error);
  });

// Routes
app.use("/api/employee", empRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});