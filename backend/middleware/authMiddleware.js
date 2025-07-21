const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  //check for token in the authorization object in HTTP request headers and starts with 'Bearer'
  //note when the token is sent in the authorization header it has the f/f fomrat : Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get the token from the header, by splitin on space that comes after "Bearer"(the 2nd e/t)
      token = req.headers.authorization.split(" ")[1];
      // decode and Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //Get user from the token
      // and asign it to req.user so that the token can be available in protected routes
      //find user by the id and exclude the password for safety
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  //if there is no token
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
