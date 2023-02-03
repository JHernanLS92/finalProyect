const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return productincart.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schema:
 *     addtocart:
 *       type: object
 *       properties:
 *         product_id:
 *           type: int
 *           example: 1
 *         cart_id:
 *           type: int
 *           example: 1
 *         quantity:
 *           type: int
 *           example: 10
 *         price:
 *           type: float
 *           example: 25.5
 *         status:
 *           type: enum
 *           example: aviable
 */

class productincart extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cart',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("buyed","aviable"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productincart',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "productincart_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
