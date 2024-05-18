const express = require("express");
const { getDB } = require("../database");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const searchTerm = req.query.search || "";
    const db = getDB();
    const collection = db.collection("mentalIllnesses");

    const query = searchTerm
      ? {
          $or: [
            { name: new RegExp(searchTerm, "i") },
            { description: new RegExp(searchTerm, "i") },
            { prevalence: new RegExp(searchTerm, "i") },
            { keywords: { $in: [new RegExp(searchTerm, "i")] } },
          ],
        }
      : {};

    const mentalIllnesses = await collection.find(query).toArray();
    res.json(mentalIllnesses);
  } catch (error) {
    console.error("Error fetching mental illnesses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
