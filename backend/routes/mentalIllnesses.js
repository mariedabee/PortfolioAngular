const express = require("express");
const { getDB } = require("../database");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection("mentalIllnesses");
    const mentalIllnesses = await collection.find().toArray();
    console.log(mentalIllnesses);
    res.json(mentalIllnesses);
  } catch (error) {
    console.error("Error fetching mental illnesses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
