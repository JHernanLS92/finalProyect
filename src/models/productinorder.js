const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return productinorder.init(sequelize, DataTypes);
}

class productinorder extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product',
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
    tableName: 'productinorder',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "productinorder_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
