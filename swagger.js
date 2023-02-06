const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options = {
    apis:[
      "./src/routes/auth.routes.js",
      "./src/models/users.js",
      "./src/routes/products.routes.js",
      "./src/models/product.js",
      "./src/routes/productIncart.routes.js",
      "./src/models/productincart.js",
      "./src/routes/cart.routes.js",
    ],
    definition: {
      openapi: "3.0.0",
      info: {
              title: "Ecommerce API",
              version: "1.0.0",
              description: "API para una ecommerce" 
          },
    }
  };

  const swaggerSpec = swaggerJSDoc(options);
  const swaggerDocs = (app, port) => {
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/api/v1/docs.json", (req, res) => {
        res.setHeader({"Content-Type": "application/Json"});
        res.send(swaggerSpec);
    });
    console.log(`Documentacion V1 disponible en ${process.env.URL}:${port}/api/v1/docs`);
  }

  module.exports = {swaggerDocs}