const api = require("./api");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const search = require("./search");

const app = express();

const swaggerDefinition = {
  info: {
    title: "Trelloid API",
    version: "0.2.0",
    description: "Example API for a Kanban board application (WIP)"
  },
  host: "localhost:3010",
  basePath: "/api"
};

const swaggerOptions = {
  swaggerDefinition: swaggerDefinition,
  apis: [path.resolve(__dirname, "api/index.js")]
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

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
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
