const mongoose = require("mongoose");


const pipeSchema = new mongoose.Schema({
  pipeName: { type: "string", required: true },
  pipeIcon: { type: "string"},
   color: [{
    color1: { type: "string", required: true },
    color2: { type: "string", required: true },
    color3: { type: "string", required: true },
    color4: { type: "string", required: true },
    color5: { type: "string", required: true }
}],
  lists: [
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