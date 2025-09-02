const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  clientId: { type: String, required: true },
  name: { type: String, required: true },
  dimensions: {
    length: { type: Number, required: true },
    width: { type: Number, required: true },
  },
  color: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed", "cancelled"],
    default: "pending",
  },
}, { timestamps: true });

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel
