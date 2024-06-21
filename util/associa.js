// associations.js
const Cart = require('../models/cart');
const Produto = require('../models/product');
const CartItem = require('../models/cart-item');
const Pessoa = require('../models/pessoa');

Pessoa.hasMany(Produto, {
  foreignKey: 'pessoaId',
  onDelete: 'RESTRICT',
});

Pessoa.hasOne(Cart, {});

Produto.belongsTo(Pessoa, {
  constraints: true,
  onDelete: 'RESTRICT',
});
Produto.hasMany(CartItem, {
  foreignKey: 'produtoId',
});
/* 
Cart.belongsToMany(Produto, { through: CartItem });
Produto.belongsToMany(Cart, { through: CartItem }); */

CartItem.belongsTo(Cart, {
  foreignKey: 'cartId',
  onDelete: 'CASCADE', // Opcional: para garantir que o item do carrinho seja excluído quando o carrinho for excluído
});

CartItem.belongsTo(Produto, {
  foreignKey: 'produtoId',
  onDelete: 'CASCADE', // Opcional: para garantir que o item do carrinho seja excluído quando o produto for excluído
});

Cart.belongsTo(Pessoa, {});
Cart.hasMany(CartItem, {
  foreignKey: 'cartId',
  onDelete: 'CASCADE',
});
module.exports = { Cart, Produto, CartItem };
