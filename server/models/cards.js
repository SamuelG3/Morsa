const mongoose = require("mongoose");

const Cards = mongoose.model("cards", userSchema);

module.exports = { Cards, validate };