const express = require("express");
const router = express.Router();
const fabricationController = require("../controllers/fabrication.controller");
const { validateFabrication } = require("../middlewares/fabrication");
const upload = require("../middlewares/upload");

router.post(
  "/",
  upload.single("image"),
  validateFabrication,
  fabricationController.createFabricationProduct
);
router.get("/", fabricationController.getFabricationProducts);
router.get("/:productId", fabricationController.getFabricationProductById);
router.put("/:productId", validateFabrication, fabricationController.updateFabricationProduct);
router.delete("/:productId", fabricationController.deleteFabricationProduct);

module.exports = router;
