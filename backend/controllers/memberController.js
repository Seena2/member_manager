//@desc     Get all members
//@route    GET /api/members
//@access   private
const getMembers = (req, res) => {
  res.status(200).json({ message: "Get members" });
};

//@desc     Set member
//@route    POST /api/member
//@access   private
const setMember = (req, res) => {
  res.status(200).json({ message: "Set member" });
};

//@desc     Update member
//@route    PUT /api/members/:id
//@access   private
const updateMember = (req, res) => {
  res.status(200).json({ message: `Update member ${req.params.id}` });
};

//@desc     Delete member
//@route    DELETE /api/members/:id
//@access   private
const deleteMember = (req, res) => {
  res.status(200).json({ message: `Delete member ${req.params.id}` });
};

module.exports = { getMembers, setMember, updateMember, deleteMember };
