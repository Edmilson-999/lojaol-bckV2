'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('pessoa', [{
      nome: 'Bruno',
      email: 'bruno@doe.com',
      password: '123456789',
    },
    {
      nome: 'Emre',
      email: 'emre@smith.com',
      password: '123456789',

    },
    {
      nome: 'John',
      email: 'john@stone.com',
      password: '123456789',

    }], {});

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('pessoa', null, {});
  }
};
