const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");
const { validateOrder } = require("../middlewares/order");

router.post("/", orderController.createOrder);
router.get("/", orderController.getOrders);
router.get("/:orderId", orderController.getOrderById);
router.put("/:orderId", validateOrder, orderController.updateOrder);
router.delete("/:orderId", orderController.cancelOrder);

module.exports = router;
