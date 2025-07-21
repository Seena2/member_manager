const asyncHandler = require("express-async-handler");
const Member = require("../models/memberModel");
const Corporate = require("../models/corporateModel");
const User = require("../models/userModel");

//@desc     Get all members // changed to Get member
//@route    GET /api/members
//@access   private
const getMembers = asyncHandler(async (req, res) => {
  //get members data from DB using mongoose model or Corporaate data
  // const members = await Member.find();
  // const corporate = await Corporate.find();
  //Modified to fetch single member with 'id' instead of all members
  const member = await Member.find({ user: req.user.id });
  const corporate = await Corporate.find({ user: req.user.id });
  //res.status(200).json({ message: "Get members" });
  res.status(200).json(member);
});

//@desc     Set member
//@route    POST /api/member
//@access   private
const setMember = asyncHandler(async (req, res) => {
  //check if user is sending text data, if not send d/t status like 400 client error or bad user
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }
  const member = await Member.create({
    text: req.body.text,
    user: req.user.id,
  });
  //res.status(200).json({ message: "Set member" });
  res.status(200).json(member);
});

//@desc     Update member
//@route    PUT /api/members/:id
//@access   private
const updateMember = asyncHandler(async (req, res) => {
  //Get the member we want to update
  const member = await Member.findById(req.params.id);
  //check if the target member exists
  if (!member) {
    res.status(400);
    throw new Error("Member not found");
  }
  //get the user
  const user = await User.findById(req.user.id);
  //check if user exists
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  //make sure one user doesn't modify the other users data
  //check if the logged in user matches the member user
  if (member.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized, permission denied");
  }
  //else update member data, not we changed the varible name(updatedMember)
  // not to match the function name(updateMember)
  const updatedMember = await Member.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true } //option: creates new,if it doesnt exist
  );
  // res.status(200).json({ message: `Update member ${req.params.id}` });
  res.status(200).json(updatedMember);
});

//@desc     Delete member
//@route    DELETE /api/members/:id
//@access   private
const deleteMember = asyncHandler(async (req, res) => {
  //Get the member we want to delete
  const member = await Member.findById(req.params.id);
  //check if the target member exists
  if (!member) {
    res.status(400);
    throw new Error("Member not found");
  }
  //get the user
  const user = await User.findById(req.user.id);
  //check if user exists
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  //make sure one user doesn't modify the other users data
  //check if the logged in user matches the member user
  if (member.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized, permission denied");
  }
  //else if it exists remove it
  // await member.remove();//depricated
  await member.deleteOne({ _id: req.params.id });
  // res.status(200).json({ message: `Delete member ${req.params.id}` });
  res.status(200).json({ id: req.params.id });
});

module.exports = { getMembers, setMember, updateMember, deleteMember };
