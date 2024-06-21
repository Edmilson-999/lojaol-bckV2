const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Cart = sequelize.define(
  'cart',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false, // Desativando a criação automática de createdAt e updatedAt
  }
);


module.exports = Cart;
