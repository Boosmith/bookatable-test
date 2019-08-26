const bodyParser = require("body-parser");
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const api = require("./api");
const search = require("./search");
const { swaggerUi, swaggerSpec } = require("../src/utils/swagger");

const app = express();

require("./db");

app.use(cors());
app.use(logger(process.env.REQUEST_LOG_FORMAT || "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/swagger.json", function(req, res) {
  res.setHeader("Content-type", "application/json");
  res.send(swaggerSpec);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", api);
app.use("/search", search);

app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
});

module.exports = app;
