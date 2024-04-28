//to load environment variables and configure application
require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  mongoURI: process.env.MONGODB_URI,
};
