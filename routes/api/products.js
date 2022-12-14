const express = require("express");
const verifyJWT = require('../../utils/verifyJWT')
const Product = require("../../models/product");

const router = express.Router();

router.get("/", verifyJWT, async (req, res) => {
  try {
    const products = await Product.find();
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router