const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    measure: {
      type: String,
      enum: ["gr", "ml"]
    },
    price: {
      type: Number,
      required: true
    },
    photo: {
      type: String,
      required: false
    },
    category: {
      type: String,
      enum: ["Sabores", "Colores", "Materias Primas"]
    },
    description: String
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    }
  }
);

module.exports = mongoose.model("Product", productSchema);
