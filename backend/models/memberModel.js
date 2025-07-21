const mongoose = require("mongoose");

//Create schema
const memberSchema = mongoose.Schema(
  {
    //Basic Schema Data types
    /*
    name: String, //String
    price: Number, //Number:integer and floats
    eventDate: Date, //Date and time
    data: Buffer, //images,
    isActive: Boolean,
    //ObjectId: Represents a MongoDB ObjectId, used for referencing other documents.
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    roles: [String], //Array of String, type of items in the array can also be specified
    arbitraryData: mongoose.Schema.Types.Mixed, //allow any data type
    */
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", //referense to Model where the objectID points to
    },
    membershipType: {
      type: String,
      enum: ["regular", "cooperative", "life_time", "honorary"],
      default: "regular",
      required: [true, "Please choose membership type"],
    },

    title: {
      type: String,
      enum: ["doctor", "professor", "mister", "missus", "miss"],
      required: [true, "Please choose your title"],
    },

    first_name: {
      type: String,
      trim: true,
      required: [true, "Please enter your first name"],
    },
    middle_name: {
      type: String,
      trim: true,
      required: [true, "Please enter your middle name"],
    },
    last_name: {
      type: String,
      trim: true,
      required: [true, "Please enter your last name"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Please enter your birth date"],
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: [true, "Please choose your gender"],
    },
    married: {
      type: String,
      enum: ["married", "single"],
      required: [true, "Please choose your maritial status"],
    },
    children: {
      type: Number,
      trim: true,
      required: [true, "Please specify how many children you have"],
    },
    nationality: {
      type: String,
      trim: true,
      required: [true, "Please add your nationality"],
    },
    country: {
      type: String,
      trim: true,
      required: [true, "Please add Country"],
    },
    city: {
      type: String,
      trim: true,
      required: [true, "Please add City"],
    },

    phone: {
      type: [
        {
          primary: {
            type: String,
            trim: true,
            required: [true, "Please add primary Phone number"],
          },
          secondary: {
            type: String,
            trim: true,
          },
        },
      ],
    },
    email: {
      type: [
        {
          primary: {
            type: String,
            unique: true,
            trim: true,
            match: [/.+\@.+\..+/, "Please enter valid email address"],
            required: [true, "Please add your primary email"],
          },
          secondary: {
            type: String,
            trim: true,
            match: [/.+\@.+\..+/, "Please enter valid email address"],
          },
        },
      ],
    },
    pobox: {
      type: String,
      trim: true,
    },
    photo: {
      type: String, //URL path to file or use Buffer or multier or other for files
      required: [true, "Upload your profile picture"],
    },
    employmentStatus: {
      type: String,
      enum: ["employed", "Unemployed"],
      required: [true, "Please choose your employment status"],
    },
    employed: {
      type: [
        {
          orgName: {
            type: String,
            required: [true, "Please add name of the organization/Institute"],
          },
          orgType: {
            type: String,
            enum: [
              "governmental",
              "non_Governmental",
              "international_organization",
              "associations",
              "Other_NGO_types",
              "private",
              "run my own business",
              "other",
            ],
            required: [true, "Please choose organization type"],
          },
          role: {
            type: String,
            required: [true, "Your role in the organization"],
          },
          country: {
            type: String,
          },
          region: {
            type: String,
          },
          district: {
            type: String,
          },
          kebele: {
            type: String,
          },
        },
      ],
    },

    totalExperiance: {
      type: Number,
    },
    career_interest: {
      type: String,
      enum: [
        "academician",
        "researcher",
        "Field_practitioner",
        "private_practitioner",
        "to_work_for_development_organization",
        "other",
      ],
      required: [true, "Please choose your career interest"],
    },
    qualification: {
      type: String,
      enum: ["DVM", "MSc_MVSc", "PhD", "other"],
      required: [true, "Highest Level of Academic Qualification Achieved"],
    },

    education: {
      type: [
        {
          degree: {
            type: String,
            enum: ["first degree", "masters", "PhD"],
            required: [true, "Please choose degree"],
          },
          dateGraduated: {
            type: Date,
            required: [true, "Please enter completed date"],
            trim: true,
          },
          institute: {
            type: String,
            required: [
              true,
              "Please enter name of Institute, College or Institute",
            ],
          },
          temporaryCertificate: {
            type: String, //URL path to file or use Buffer or multier or other for files
            required: true,
          },
        },
      ],
    },
    otherQualification: {
      type: [String],
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
module.exports = mongoose.model("Member", memberSchema);
