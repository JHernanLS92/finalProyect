const authRoutes = require("./auth.routes");
const productRoutes = require("./products.routes");
const productincartRoutes = require("./productIncart.routes");
const authMiddleware = require("..//middlewares/auth.middleware");

const routerApi = (app) =>{
    app.use("/api/v1/auth", authRoutes);
    app.use("/api/v1/product",   productRoutes);
    app.use("/api/v1/cart",  productincartRoutes); 
}

module.exports = routerApi;