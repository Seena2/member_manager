const mongoose = require("mongoose");

//Connect to DB
const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    //Note,'cyan.underline' is just a method from color library used to color the output
    //they are not mandatory for the code to work
    console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1); //exit the process on failiour
  }
};
module.exports = connectToDB;
