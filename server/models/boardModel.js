const mongoose = require("mongoose");

const boardSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    icon: { type: String, required: true },
    colors: {
      color1: { type: "string", required: true },
      color2: { type: "string", required: true },
      color3: { type: "string", required: true },
      color4: { type: "string", required: true },
      color5: { type: "string", required: true },
    },
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
