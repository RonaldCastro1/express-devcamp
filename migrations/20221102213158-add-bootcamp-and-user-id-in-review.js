'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //Add colum: argumentos
    await queryInterface.addColumn('reviews', 'bootcamp_id', {type:Sequelize.INTEGER,references:{model:'bootcamps', key:'id'},onUpdate: 'CASCADE', onDelete: 'SET NULL'})
    await queryInterface.addColumn('reviews', 'user_id', {type:Sequelize.INTEGER,references:{model:'users', key:'id'},onUpdate: 'CASCADE', onDelete: 'SET NULL'})

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('reviews', 'bootcamp_id')
    await queryInterface.removeColumn('reviews', 'user_id')
  }
};
