const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const plm = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    name: String,
    lastname: String,
    email: {
      type: String,
      unique: true
    },
    telephone: Number,
    photoURL: String,
    role: {
      enum: ["admin", "user"],
      default: "user"
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order"
      }
    ]
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    }
  }
);

userSchema.plugin(plm, { usernameField: "email" });

module.exports = mongoose.model("User", userSchema);
