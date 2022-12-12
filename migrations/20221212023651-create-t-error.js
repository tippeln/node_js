'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('t_error', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shorei_no: {
        type: Sequelize.INTEGER
      },
      error_no: {
        type: Sequelize.INTEGER
      },
      row_no: {
        type: Sequelize.INTEGER
      },
      col_no: {
        type: Sequelize.INTEGER
      },
      naiyo: {
        type: Sequelize.STRING(100)
      },
      rel_col_no: {
        type: Sequelize.INTEGER
      },
      biko: {
        type: Sequelize.STRING(100)
      },
      last_upd_datetime: {
        type: Sequelize.DATE
      },
      last_upd_user_no: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('t_error');
  }
};