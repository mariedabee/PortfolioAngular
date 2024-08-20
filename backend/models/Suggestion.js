const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
});

// Create the Suggestion model from the schema
const Suggestion = mongoose.model("Suggestion", SuggestionSchema);

module.exports = Suggestion;
