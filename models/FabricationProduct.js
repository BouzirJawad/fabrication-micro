const mongoose = require("mongoose");

const FabricationProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      minLength: 3,
      maxLength: 50,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    imagePublicId: {
      type: String,
      required: true,
    },
    dimensions: {
      length: { type: Number, required: true },
      width: { type: Number, required: true },
    },
    colors: { type: String, required: true },
  },
  { timestamps: true }
);

const FabricationProductModel = mongoose.model("FabricationProduct", FabricationProductSchema);
module.exports = FabricationProductModel
