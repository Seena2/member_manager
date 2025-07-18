const express = require("express");
const colors = require("colors"); //simply colors the code
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const memberRoutes = require("./routes/memberRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectToDB = require("./config/db.js");

connectToDB();

//Init express app
const app = express();
//Middlewares
app.use(express.json()); //json body parser for raw json
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/members", memberRoutes);
//Custom middleware
//Note that custom middleware (including error-handling) must be placed after all other middleware and route handlers
app.use(errorHandler);

app.listen(port, () => console.log(`Server listining on port, ${port}`));
