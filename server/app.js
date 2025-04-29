const express = require("express");
const cors = require("cors");
const transactionRouter = require("./routes/transactionRoutes");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appArror");

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json({ limit: "4Mb" }));

app.use("/api/transactions", transactionRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`This route ${req.originalUrl} doesn't exist.`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
