const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const auth = require("../../utils/auth");
const User = require("../../models/user");

const router = express.Router();

//----------------------------------------
//------GET : "api/auth" : Public---------
//----------------------------------------

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      res.status(404).json({ message: "User Not Found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//-----------------------------------------
//------Post : "api/auth" : Public---------
//-Authenticate user and return jwt token--
//-----------------------------------------

router.post(
  "/",
  [
    check("email", "Please Include a valid email.").isEmail(),
    check("password", "Please enter password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User Not Found" });
      }
      const isMatched = await bcrypt.compare(password, user.password);
      if (!isMatched) {
        return res.status(401).json({ message: "Invalid Password" });
      }
      const payload = {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      };
      jsonwebtoken.sign(
        payload,
        `${process.env.JWT_SECRET}`,
        { expiresIn: "10 days" },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        },
      );
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  },
);

module.exports = router;
