var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var userRoute = require("./routes/userregister");
var lawyerRoute = require("./routes/lawyerregister");

var loginRouter = require("./routes/login");
var apiRouter = require("./routes/api");

var app = express();
mongoose.connect(process.env.DB || "mongodb://localhost/bookmylawyer");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/')));
app.use("/login", loginRouter);
app.use("/user", userRoute);
app.use("/lawyer", lawyerRoute);
app.use("/api", apiRouter);
app.use("*", (req, res, next) => {
   res.sendFile(path.join(__dirname, 'public/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development

  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("404");
});

module.exports = app;
