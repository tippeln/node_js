'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('m_user', [
      {
        user_no: 1, 
        user_id: 'm',
        pwd: bcrypt.hashSync('m', 10),
        user_nm: 'テストユーザーm',
        last_logon_datetime: new Date(),
        last_upd_datetime:new Date(),
        last_upd_user_no: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_no: 2, 
        user_id: 'a',
        pwd: bcrypt.hashSync('a', 10),
        user_nm: 'テストユーザーa',
        last_logon_datetime: new Date(),
        last_upd_datetime:new Date(),
        last_upd_user_no: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_no: 3, 
        user_id: 'tanaka',
        pwd: bcrypt.hashSync('taro', 10),
        user_nm: '田中太郎',
        last_logon_datetime: new Date(),
        last_upd_datetime:new Date(),
        last_upd_user_no: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_no: 4,     
        user_id: 'hanako',
        pwd: bcrypt.hashSync('yamada', 10),
        user_nm: '山田花子',
        last_logon_datetime: new Date(),
        last_upd_datetime:new Date(),
        last_upd_user_no: 4,        
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('m_user', null, {});
  }
};