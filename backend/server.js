const express = require("express");
const { connectDB } = require("./database");
const { port } = require("./config");
const mentalIllnessesRouter = require("./routes/mentalIllnesses");

const app = express();

app.use(express.json());

connectDB();

app.use("/api/mental-illnesses", mentalIllnessesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
