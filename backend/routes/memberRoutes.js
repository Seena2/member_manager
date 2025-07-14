const express = require("express");
const router = express.Router();
const {
  getMembers,
  setMember,
  updateMember,
  deleteMember,
} = require("../controllers/memberController");

//Create routes on router object
/*
//GET
router.get("/", getMembers);
//POST
router.post("/", setMember);
//Update: note we need query parameter to specify the record
router.put("/:id", updateMember);
//Delete
router.delete("/:id", deleteMember);
*/
//We can clean and refactor the code even more using 'route()' to group &chain similar routes together
//Note we reduced the above 4 line of code to 2
//GET & POST
router.route("/").get(getMembers).post(setMember);
//PUT & DELETE
router.route("/:id").put(updateMember).delete(deleteMember);
module.exports = router;
