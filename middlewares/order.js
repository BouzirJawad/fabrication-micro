const { body } = require("express-validator");

exports.validateOrder = [
  body("name")
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must be at lease 3 characters (max 50)"),
  body("color").notEmpty().withMessage("Color required"),
  body("quantity").notEmpty().isInt({ min: 0 }).withMessage("Quantity must be a positive number"),
  body("dimensions.length")
    .notEmpty()
    .withMessage("Length is required")
    .isFloat({ min: 0 })
    .withMessage("Length must be a positive number"),
  body("dimensions.width")
    .notEmpty()
    .withMessage("Width is required")
    .isFloat({ min: 0 })
    .withMessage("Width must be a positive number"),
];
