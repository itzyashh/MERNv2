import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: validator.isEmail,

  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  avatar: {
    public_id: String,
    url: String,
  },
  otp:Number,
  otpExpires:Date,
});

userSchema.pre("save", async function() {
  this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.verifyPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}

export const User = mongoose.model("user", userSchema);
