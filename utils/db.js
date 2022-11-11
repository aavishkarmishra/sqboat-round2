const mongoose = require("mongoose");

const MONGO_URI = `${process.env.MONGO_URI}`;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected...........");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
