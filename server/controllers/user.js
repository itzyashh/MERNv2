import { User } from "../models/user.js";

export const signup = async (req, res, next) => {
  
  const { name, email, password, pinCode, address, city, state, country } =
  req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }
  await User.create({
    name,
    email,
    password,
    pinCode,
    address,
    city,
    state,
    country,
  });
  res.status(201).json({ success: true });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }
  const token = await user.generateToken();
  res.status(200).cookie("token",token,{
        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days
  }).json({ success: true, token });
};
