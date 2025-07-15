const asyncHandler = require("express-async-handler");
//@desc     Get all members
//@route    GET /api/members
//@access   private
const getMembers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get members" });
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
  //res.status(200).json({ message: "Set member" });
});

//@desc     Update member
//@route    PUT /api/members/:id
//@access   private
const updateMember = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update member ${req.params.id}` });
});

//@desc     Delete member
//@route    DELETE /api/members/:id
//@access   private
const deleteMember = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete member ${req.params.id}` });
});

module.exports = { getMembers, setMember, updateMember, deleteMember };
