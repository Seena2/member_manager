const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc     Register new user
//@route    POST /api/users
//@access   public
const registerUser = asyncHandler(async (req, res) => {
  //get body data
  const { name, email, password } = req.body;
  //validate the data
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  //check if user exists,
  // if user exist send error, b/c the user is already registered
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }
  //Hash the password
  const salt = await bcrypt.genSalt(10); //generate salt
  const hashedPassword = await bcrypt.hash(password, salt);
  //Create the user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  //Check if user is created successfully
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc     Authenticate a user(Login)
//@route    POST /api/users/login
//@access   public
const loginUser = asyncHandler(async (req, res) => {
  //get body data
  const { email, password } = req.body;
  //chek for user email: find the user from DB using the email
  const user = await User.findOne({ email });
  //match the password : recieved from user and the hashed and stored
  const comparePassword = await bcrypt.compare(password, user.password);
  if (user && comparePassword) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

//@desc     Get user data
//@route    GET /api/users/me
//@access   private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

//Generate JWT token
const generateToken = (id) => {
  //takes the data/payload(in this case id), secret & options
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d", //30 days
  });
};
module.exports = { registerUser, loginUser, getMe };
