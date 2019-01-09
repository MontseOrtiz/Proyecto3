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
    telephones: [
      {
        type: Number,
        tipo: {
          type: String,
          enum: ["Casa", "Celular"]
        }
      }
    ],
    photoURL: String,
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    },
    directionLine1: String,
    directionLine2: String,
    city: String,
    state: String,
    cp: Number,

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
