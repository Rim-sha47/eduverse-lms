const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load env variables
dotenv.config();

// DB Connection
const connectDB = require("./config/db");

// Route Imports
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");

// App Initialize
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("EduVerse Backend Running 🚀");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

// PORT
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});