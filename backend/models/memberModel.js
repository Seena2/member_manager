const mongoose = require("mongoose");

//Create schema
const memberSchema = mongoose.Schema(
  {
    // text: String  or
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Member", memberSchema);
