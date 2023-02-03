const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return order.init(sequelize, DataTypes);
}

class order extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    total_price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.ENUM("buyed","aviable"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "order_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
