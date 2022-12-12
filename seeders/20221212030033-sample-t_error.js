'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('t_error', [
      {
        shorei_no: 1, 
        error_no: 1, 
        row_no: 1, 
        col_no: 1, 
        naiyo: 'カラム数が違います。正しいカラム数：465,現在のカラム数:128',
        rel_col_no: 1, 
        biko: '備考欄です。',
        last_upd_datetime:new Date(),
        last_upd_user_no: 1,
        createdAt: new Date(),
        updatedAt: new Date()        
      },
      {
        shorei_no: 2, 
        error_no: 2, 
        row_no: 2, 
        col_no: 2, 
        naiyo: 'カラム数が違います。正しいカラム数：465,現在のカラム数:128',
        rel_col_no: 2, 
        biko: '備考欄です。',
        last_upd_datetime:new Date(),
        last_upd_user_no: 2,
        createdAt: new Date(),
        updatedAt: new Date()        
      },
      {
        shorei_no: 3, 
        error_no: 3, 
        row_no: 3, 
        col_no: 3, 
        naiyo: 'カラム数が違います。正しいカラム数：465,現在のカラム数:328',
        rel_col_no: 3, 
        biko: '備考欄です。',
        last_upd_datetime:new Date(),
        last_upd_user_no: 3,
        createdAt: new Date(),
        updatedAt: new Date()        
      },
      {
        shorei_no: 4, 
        error_no: 4, 
        row_no: 4, 
        col_no: 4, 
        naiyo: 'カラム数が違います。正しいカラム数：465,現在のカラム数:428',
        rel_col_no: 4, 
        biko: '備考欄です。',
        last_upd_datetime:new Date(),
        last_upd_user_no: 4,
        createdAt: new Date(),
        updatedAt: new Date()     
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('t_error', null, {});
  }
};
