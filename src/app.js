const api = require("./api");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");

const search = require("./search");

const app = express();

const swaggerDefinition = {
  info: {
    title: "Node Swagger API",
    version: "1.0.0",
    description: "Demonstrating how to describe a RESTful API with Swagger"
  },
  host: "localhost:3000",
  basePath: "/"
};

const swaggerOptions = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ["./api/*.js"]
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
