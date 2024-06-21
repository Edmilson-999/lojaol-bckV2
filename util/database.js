const envs = require('./config');
const Sequelize = require('sequelize');

const config = require('../config/config.json')[`${envs.AMBIENTE}`];

const connDB = new Sequelize(
  `${config.database}`,`${config.username}`,`${config.password}`, {
  dialect: 'postgres',
  host: config.host,
  logging: false, // Disables logging
  dialectOptions: config.dialectOptions,
  timestamps: false
});


/* const meuSequelize = new Sequelize(
  envs.DB, envs.USER, envs.PASSWORD, {
    dialect: 'postgres',
    host: envs.HOST,
    //logging: false, // Disables logging
    timestamps: false
  }
);
 */
module.exports = connDB;