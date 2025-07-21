const mongoose = require("mongoose");

//Create schema
const corporateSchema = mongoose.Schema(
  {
    membershipType: {
      type: String,
      enum: ["regular", "cooperative", "life_time", "honorary"],
      required: [true, "Please choose membership type"],
      default: "cooperative",
    },
    organizationName: {
      type: String,
      trim: true,
      required: [true, "Please add name of the organization"],
    },
    phone: {
      type: [
        {
          type: String,
          trim: true,
          required: [true, "Please add primary Phone number"],
        },
      ],
    },

    email: {
      type: [
        {
          type: String,
          unique: true,
          trim: true,
          match: [/.+\@.+\..+/, "Please enter valid email address"],
          required: [true, "Please add your primary email"],
        },
      ],
    },

    pobox: {
      type: String,
      trim: true,
    },

    reciept: {
      type: String, //URL path to file or use Buffer or multier or other for files
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Corporate", corporateSchema);
