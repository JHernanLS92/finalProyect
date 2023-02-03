const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  return users.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schema:
 *     register:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Hernan
 *         lastname:
 *           tyoe: string
 *           example: lopez
 *         email:
 *           type: string
 *           example: hernan@gmail.com
 *         phone:
 *           type: string
 *           example: 142412345
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: hernan@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     loginResponse:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Hernan
 *         lastname:
 *           type: string
 *           example: Lopez
 *         id:
 *           type: int
 *           example: 1
 *         email:
 *           type: string
 *           example: hernan@gmail.com
 *         token:
 *           type: string
 *           example: $2b$10$XTnuc1yLe5nwrzABMOYsaOmXSYnD3qLF.9QmQXTSdqLD2eFTY.P30
 */

class users extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "users_email_key"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
          const { password } = user;
          const hash = bcrypt.hashSync(password, 10);
          user.password = hash;
      }
    },
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
