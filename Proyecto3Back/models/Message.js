const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    name: String,

    email: {
      type: String,
      unique: true
    },
    telephone: Number,

    message: String
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    }
  }
);

module.exports = mongoose.model("Message", messageSchema);
