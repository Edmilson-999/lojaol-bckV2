'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('produto', [{
      title: 'Oculos mergulho',
      price: 1000,
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.exNxJMXp5C8c09NZ8D7dUgHaHk%26pid%3DApi&f=1&ipt=6061825afdb2b8825bd1378206069d07c37321926197e3122a720524b8936d5a&ipo=images',
      description: 'Oculos mergulho',
      pessoaId: '1'
    },
    {
      title: 'Fato mergulho',
      price: 2000,
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.exNxJMXp5C8c09NZ8D7dUgHaHk%26pid%3DApi&f=1&ipt=6061825afdb2b8825bd1378206069d07c37321926197e3122a720524b8936d5a&ipo=images',
      description: 'Fato Oculos mergulho',
      pessoaId: '1'
    },
    {
      title: 'Maquina fotografia',
      price: 10000,
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.exNxJMXp5C8c09NZ8D7dUgHaHk%26pid%3DApi&f=1&ipt=6061825afdb2b8825bd1378206069d07c37321926197e3122a720524b8936d5a&ipo=images',
      description: 'Maquinaa',
      pessoaId: '2'

    }], {});

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('produto', null, {});
  }
};
