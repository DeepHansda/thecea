const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      require: true,
    },
    password: {
      type: String,
      trim: true,
      min: 8,
      lowercase: true,
      require: true,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    this.password = await bcrypt.hash(this.password, 10);
  });
  
  userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  userSchema.methods.getToken = async function () {
    const token = await jwt.sign({ id: this._id }, process.env.JWT_KEY, {
      expiresIn: "3m"
    });
  
    return token;
  };

module.exports = model("user", userSchema);
