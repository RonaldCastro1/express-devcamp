'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bootcamps', [{
       name: 'John Doe',
       description: 'Jejeje',
       website: 'www.colombia.com',
       phone: '32145',
       average_raiting: '42',
       average_cost: '4300'
     }], {});
   
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('bootcamps', null, {});
    
  }
};
