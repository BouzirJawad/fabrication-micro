const Order = require("../models/Order");
const { validationResult } = require("express-validator");

const createOrder = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  try {
    const { clientId, description, dimensions, color, quantity } = req.body;

    const newOrder = new Order({
      clientId,
      description,
      dimensions,
      color,
      quantity,
    });

    await newOrder.save();

    res
      .status(201)
      .json({ message: "Order submitted successfully!", order: newOrder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    if (orders.length === 0) {
      return res.status(404).json({ message: "No Orders to display" });
    }

    res.status(201).json({ orders });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getOrderById = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found!" });
    }

    if (order.status !== "pending") {
        return res.status(404).json({ message: "Order already in progress, You cannot edit!"})
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    res.status(201).json({
      message: "Order updated successfully!",
      updatedOrder: updatedOrder,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const cancelOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(500).json({ message: "Order not found!" });
    }

    order.status = "cancelled"
    await order.save()

    res.status(201).json({ message: "Order cancelled successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  cancelOrder,
};
