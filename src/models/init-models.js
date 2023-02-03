const DataTypes = require("sequelize").DataTypes;
const _cart = require("./cart");
const _order = require("./order");
const _product = require("./product");
const _productincart = require("./productincart");
const _productinorder = require("./productinorder");
const _users = require("./users");

function initModels(sequelize) {
  const users = _users(sequelize, DataTypes);
  const cart = _cart(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const product = _product(sequelize, DataTypes);
  const productincart = _productincart(sequelize, DataTypes);
  const productinorder = _productinorder(sequelize, DataTypes);

  productincart.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(productincart, { as: "productincarts", foreignKey: "cart_id"});
  productinorder.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(productinorder, { as: "productinorders", foreignKey: "order_id"});
  productincart.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(productincart, { as: "productincarts", foreignKey: "product_id"});
  productinorder.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(productinorder, { as: "productinorders", foreignKey: "product_id"});
  cart.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(cart, { as: "carts", foreignKey: "user_id"});
  order.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(order, { as: "orders", foreignKey: "user_id"});

  return {
    cart,
    order,
    product,
    productincart,
    productinorder,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
