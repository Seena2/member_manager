const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const memberRoutes = require("./routes/memberRoutes");
//Init express app
const app = express();
//Middlewares

//Routes
app.use("/api/members", memberRoutes);

app.listen(port, () => console.log(`Server listining on port, ${port}`));
