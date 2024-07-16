const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail", // e.g., 'gmail'
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Endpoint to handle contact form submission
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // your receiving email address
    subject: `Contact Form Submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email", error });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully", info });
    }
  });
});

module.exports = router;
