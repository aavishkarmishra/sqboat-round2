const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

const User = require("../../models/user");
const router = express.Router();

//----------------------------------------
//------POST : "api/user" : Public---------
//----------------------------------------

router.post(
  "/",
  [
    check("username", "Username is required").not().isEmpty(),
    check("username", "Username must be alphanumeric").isAlphanumeric(),
    check("password", "Password is required").not().isEmpty(),
    check("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    try {
      const { email, username, password } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        // if user already exist return bad request with below mentioned msg
        return res.status(409).json({ message: "User already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username:username,
        email:email,
        password :hashPassword,
      });
      await newUser.save();

      const payload = {
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
      };

      jsonwebtoken.sign(
        payload,
        `${process.env.JWT_SECRET}`,
        { expiresIn: "5 days" },
        (error, token) => {
          if (error) throw error;
          res.status(201).json({ token });
        },
      );
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  },
);

module.exports = router;
