const { body } = require("express-validator");

exports.validateProduct = [
  body("name")
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must be at lease 3 characters (max 50)"),
  body("price")
    .notEmpty()
    .isFloat({ min: 0 })
    .withMessage("Proce must be a positive number"),
  body("color").notEmpty().withMessage("Color required"),
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
