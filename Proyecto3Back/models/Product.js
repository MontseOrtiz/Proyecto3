const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      enum: ["500", "1000"],
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ["Sabores", "Colores", "Materias Primas"]
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    }
  }
);

module.exports = mongoose.model("Product", productSchema);
