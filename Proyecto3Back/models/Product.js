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
      required: false
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
