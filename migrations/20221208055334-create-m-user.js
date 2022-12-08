'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('m_user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_no: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING(10)
      },
      pwd: {
        type: Sequelize.STRING(60)
      },
      user_nm: {
        type: Sequelize.STRING(30)
      },
      last_logon_datetime: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('m_user');
  }
};