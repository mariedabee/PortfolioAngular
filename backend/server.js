require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./database");
const { port } = require("./config");
const nodemailer = require("nodemailer");

// Import routes
const mentalIllnessesRouter = require("./routes/mentalIllnesses");
const contactRouter = require("./routes/contact");
const suggestionRouter = require("./routes/suggestions")
const authRoutes = require("./routes/auth");

require("dotenv").config();  
const app = express();
const cors = require("cors");

// Middleware 
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

connectDB();

app.use("/api/mental-illnesses", mentalIllnessesRouter);
app.use("/api/send-contact-email", contactRouter);
app.use("/api/suggestions", suggestionRouter);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
