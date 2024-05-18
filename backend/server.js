const express = require("express");
const { connectDB } = require("./database");
const { port } = require("./config");
const mentalIllnessesRouter = require("./routes/mentalIllnesses");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/mental-illnesses", mentalIllnessesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
