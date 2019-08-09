const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const swaggerDefinition = {
  info: {
    title: "Trelloid API",
    version: "0.2.0",
    description: "Example API for a Kanban board application (WIP)"
  },
  host: "localhost:3010",
  basePath: "/"
};

const swaggerOptions = {
  swaggerDefinition: swaggerDefinition,
  apis: [path.resolve(__dirname, "../api/index.js")]
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = {
  swaggerUi,
  swaggerDefinition,
  swaggerOptions,
  swaggerSpec
};
