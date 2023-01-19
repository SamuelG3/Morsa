const mongoose = require("mongoose");
const DB_URI = process.env.DB;

const connect = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.log("Could not connect database!");
  }
};

module.exports = {
  connect
};
