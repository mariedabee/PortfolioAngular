require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./database");
const { port } = require("./config");
const nodemailer = require("nodemailer");

// Import routes
const mentalIllnessesRouter = require("./routes/mentalIllnesses");
const contactRoute = require("./routes/contact");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

connectDB();

app.use("/api/mental-illnesses", mentalIllnessesRouter);
app.use("/api/send-contact-email", contactRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
