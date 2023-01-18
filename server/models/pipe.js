const mongoose = require("mongoose");

const pipeSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  cards: [],
});

const Pipe = mongoose.model("pipe", pipeSchema);

module.exports = { Pipe, validate };