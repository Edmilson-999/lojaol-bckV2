const Sequelize = require('sequelize');
const meusequelize = require('../util/database');
const Produto = require('./product');
const Pessoa = meusequelize.define(
  'pessoa',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false, // Desativando a criação automática de createdAt e updatedAt
  }
);



module.exports = Pessoa;
