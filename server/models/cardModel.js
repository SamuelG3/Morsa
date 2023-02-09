const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    default: "",
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "list",
    required: true,
  },
  labels: [],
  user: { type: String, ref: "user" },
  position: {
    type: Number,
  },
});

const Card = mongoose.model("card", cardSchema);
module.exports = Card;
