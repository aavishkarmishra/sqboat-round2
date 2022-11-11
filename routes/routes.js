const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/api", (req, res) => {
  res.send("Welcome to our server!!");
});

if (process.env.NODE_ENV === "production") {
  router.use(express.static("../client/build"));
  router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
