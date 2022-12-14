'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('if_shorei_csvs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shorei_no: {
        autoIncrement: true, 
        type: Sequelize.INTEGER
      },
      senmon: {
        type: Sequelize.INTEGER
      },
      nendo: {
        type: Sequelize.INTEGER
      },
      shubetsu: {
        type: Sequelize.INTEGER
      },
      shinryoka: {
        type: Sequelize.INTEGER
      },
      csv_file_nm: {
        type: Sequelize.STRING(100)
      },
      mail_address: {
        type: Sequelize.STRING(100)
      },
      upd_user_no: {
        type: Sequelize.INTEGER
      },
      upd_datetime: {
        type: Sequelize.DATE
      },
      innai_kanri_cd: {
        type: Sequelize.STRING(20)
      },
      //省略
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
    await queryInterface.dropTable('if_shorei_csvs');
  }
};