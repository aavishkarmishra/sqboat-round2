const express = require("express");
const verifyJWT = require("../../utils/verifyJWT");
const Order = require("../../models/order");

const router = express.Router();

router.post("/:productId", verifyJWT, async (req, res) => {
  try {
    const productId = req.params.productId;
    const userId = req.user.id;
    const newOrder = new Order({
      productId,
      userId,
    });
    newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:orderId", verifyJWT, async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
