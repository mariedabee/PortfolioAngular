require("dotenv").config(); // Load environment variables from .env

const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./database"); // Ensure this module is properly handling the connection
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

// Import routes
const mentalIllnessesRouter = require("./routes/mentalIllnesses");
const contactRouter = require("./routes/contact");
const suggestionRouter = require("./routes/suggestions");
const authRoutes = require("./routes/auth");

const app = express();

// Port Configuration: Use the `PORT` environment variable with a fallback
const port = process.env.PORT || 3000;

// Middleware 
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB(); // Ensure this handles the connection dynamically based on MONGO_URI

// Define API routes
app.use("/api/mental-illnesses", mentalIllnessesRouter);
app.use("/api/send-contact-email", contactRouter);
app.use("/api/suggestions", suggestionRouter);
app.use("/api/auth", authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
