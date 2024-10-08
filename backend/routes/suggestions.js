// routes/suggestions.js

const express = require("express");
const { getDB } = require("../database"); // Assuming getDB is correctly implemented in your database file
const Suggestion = require("../models/Suggestion"); // Import the Mongoose model

const router = express.Router();

// GET Route for fetching and searching suggestions
router.get("/", async (req, res) => {
  try {
    const suggestions = await Suggestion.find();
    res.status(200).json(suggestions);
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST Route for submitting a suggestion
router.post("/", async (req, res) => {
  const { suggestion } = req.body;

  if (!suggestion || suggestion.trim().length === 0) {
    return res.status(400).json({ message: "Suggestion cannot be empty" });
  }

  const newSuggestion = new Suggestion({
    suggestion: suggestion.trim(),
    createdAt: new Date(),
  });

  try {
    await newSuggestion.save();
    res.status(201).json({ message: "Suggestion submitted successfully" });
  } catch (error) {
    console.error("Error saving suggestion:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST Route for adding a comment to a specific suggestion
router.post('/:id/comments', async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  if (!text || text.trim().length === 0) {
    return res.status(400).json({ message: 'Comment cannot be empty' });
  }

  try {
    const suggestion = await Suggestion.findById(id);
    if (!suggestion) {
      return res.status(404).json({ message: 'Suggestion not found' });
    }

    suggestion.comments.push({ text: text.trim() });
    await suggestion.save();

    res.status(200).json(suggestion);
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST Route for liking a specific suggestion
router.post('/:id/like', async (req, res) => {
  const { id } = req.params;

  try {
    const suggestion = await Suggestion.findById(id);
    if (!suggestion) {
      return res.status(404).json({ message: 'Suggestion not found' });
    }

    suggestion.likes += 1;
    await suggestion.save();

    res.status(200).json(suggestion);
  } catch (error) {
    console.error('Error liking suggestion:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
