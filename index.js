const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./utils/db");
const PORT = process.env.PORT || 5000;


const app = express();
connectDB();

app.get("/api", (req, res) => {
  res.send("Welcome to our server!!");
});

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}/api`),
);
