const initModels = require("../models/init-models");
const db = require("../utils/database");

const models = initModels(db);

const { cart, order, product, productincart, productinorder, users } = models
module.exports = { 
    cart,
    order,
    product,
    productincart,
    productinorder,
    users 
};