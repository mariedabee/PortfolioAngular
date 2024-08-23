const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Comment schema
const CommentSchema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define the Suggestion schema
const SuggestionSchema = new Schema({
  suggestion: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [CommentSchema], // Array of comments
});

// Create the Suggestion model from the schema
const Suggestion = mongoose.model("Suggestion", SuggestionSchema);

module.exports = Suggestion;
