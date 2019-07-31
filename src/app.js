const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const api = require("./api");
const search = require("./search");

const app = express();

require("./db");

app.use(logger(process.env.REQUEST_LOG_FORMAT || "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", api);
app.use("/search", search);

app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
