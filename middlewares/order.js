const { body } = require("express-validator");

exports.validateOrder = [
  body("description")
    .notEmpty()
    .isString()
    .isLength({ min: 1, max: 200  })
    .withMessage("description id required (max 200)"),
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
