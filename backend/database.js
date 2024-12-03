const mongoose = require("mongoose");

// Dynamically use the MONGO_URI environment variable or fallback to a default
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/mentalHealthApp";

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB at:", mongoURI);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

// Function to get the native MongoDB database object
const getDB = () => mongoose.connection.db;

module.exports = { connectDB, getDB };
