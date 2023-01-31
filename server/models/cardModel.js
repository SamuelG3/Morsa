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
  labels: [
    {
      text: {
        type: String,
      },
      color: {
        type: String,
      },
      backColor: {
        type: String,
      },
      selected: {
        type: Boolean,
      },
    },
  ],

  date: {
    _id: false,
    startDate: {
      type: Date,
    },
    dueDate: {
      type: Date,
    },
    dueTime: {
      type: String,
    },
    reminder: {
      type: Boolean,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  attachments: [
    {
      link: {
        type: String,
      },
      name: {
        type: String,
        default: null,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "list",
  },
});

const Card = mongoose.model("card", cardSchema);
module.exports = Card;
