//to handle MongoDB connection and expose a function to access the database object
const mongoose = require("mongoose");
const { mongoURI } = require("./config");

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

const getDB = () => mongoose.connection.db;

module.exports = { connectDB, getDB };
