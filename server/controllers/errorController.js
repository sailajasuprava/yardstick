const AppError = require("../utils/appArror");

const globalErrorHandler = (err, req, res, next) => {
  console.log(err);

  err.status = err.status || "error";
  err.statusCode = err.statusCode || 500;

  //Invalid MongoDB ID error / Query string error
  if (err.name === "CastError") {
    const message = `Invalid ${err.path}: ${err.value}`;
    err = new AppError(message, 400);
  }

  //Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((el) => el.message);
    err = new AppError(`Invalid input data: ${messages.join(" ")}`, 400);
  }

  //JWT Error
  if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
    err = new AppError("Please log in again", 401);
  }

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
  });
};

module.exports = globalErrorHandler;
