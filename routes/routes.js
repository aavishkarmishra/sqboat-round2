const express = require("express");
const path = require("path");
const authRoutes = require("./api/auth");
const userRoutes = require("./api/users");
const router = express.Router();

router.get("/api", (req, res) => {
  res.send("Welcome to our server!!");
});

router.use("/api/auth", authRoutes);
router.use('/api/users',userRoutes)

if (process.env.NODE_ENV === "production") {
  router.use(express.static("../client/build"));
  router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = router;
