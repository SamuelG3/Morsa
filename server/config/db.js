const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI

const connect = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(MONGODB_URI, {
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
}