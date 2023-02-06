const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return product.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schema:
 *     newproduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Laptop
 *         price:
 *           type: float
 *           example: 1600.50
 *         aviable_qty:
 *           type: int
 *           example: 15
 *         image:
 *           type: string
 *           example: http://imagen1
 *     getproduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Laptop
 *         price:
 *           type: float
 *           example: 1600.50
 *         aviable_qty:
 *           type: int
 *           example: 15
 *         image:
 *           type: string
 *           example: http://imagen1
 *     cart:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Laptop
 *         price:
 *           type: float
 *           example: 1600.50
 *         description:
 *           type: string
 *           example: El producto consta de...
 *         image:
 *           type: string
 *           example: http://imagen1
 */

class product extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aviable_qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
