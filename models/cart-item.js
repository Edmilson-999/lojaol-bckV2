const Sequelize = require('sequelize');
const meusequelize = require('../util/database');
const Cart = require('./cart');
const Produto = require('./product');

const CartItem = meusequelize.define('cartItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
}, {
  freezeTableName: true,
  timestamps: false // Desativando a criação automática de createdAt e updatedAt
});



module.exports = CartItem;
