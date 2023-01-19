const mongoose = require("mongoose");


const pipeSchema = new mongoose.Schema({
  Name: { type: "string", required: true },
  Color: { type: "string", required: true },
  Lists: [
    {
      title: { type: "string", required: true },
      creatable: { type: "boolean", required: true },
      cards: [
        {
          id: { type: String, required: true },
          content: { type: String, required: true },
          labels: [],
          password: { type: String, required: true },
          user: { type: String },
        },
      ],
    },
  ],
});
  

const pipe = mongoose.model("Pipe", pipeSchema);


module.exports = { pipe };