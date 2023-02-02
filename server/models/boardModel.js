const mongoose = require("mongoose");

const boardSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    icon: { type: String },
    colorScheme: { type: String },
    lists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "list",
      },
    ],
  },
  { timestamps: true }
);

const Board = mongoose.model("board", boardSchema);
module.exports = Board;
