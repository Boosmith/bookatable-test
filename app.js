import createError from "http-errors";
import express from "express";
import logger from "morgan";
import api from "./api";

const app = express();

app.use(logger(process.env.REQUEST_LOG_FORMAT || "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", api);

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

export default app;
