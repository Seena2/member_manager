//Middleware to override default express error handler
const errorHandler = (err, req, res, next) => {
  //use the status code we defined in controll, if not use 500
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message, //set the custom error msg we defined in controller body
    //return the details of stack trace only in development
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  next();
};
module.exports = { errorHandler };
