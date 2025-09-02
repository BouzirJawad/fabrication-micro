const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");
const { validateOrder } = require("../middlewares/order");

router.post("/", orderController.createOrder);
router.get("/", orderController.getOrders);
router.get("/:OrderId", orderController.getOrderById);
router.put("/:OrderId", validateOrder, orderController.updateOrder);
router.delete("/:productId", orderController.cancelOrder);

module.exports = router;
