'use strict';
module.exports = (sequelize, DataTypes) => {
  const t_error = sequelize.define('t_error', {
    shorei_no: DataTypes.INTEGER ,
    error_no: DataTypes.INTEGER ,
    row_no: DataTypes.INTEGER ,
    col_no: DataTypes.INTEGER ,
    naiyo: DataTypes.STRING(100), 
    rel_col_no: DataTypes.INTEGER ,
    biko: DataTypes.STRING(100), 
    last_upd_datetime: DataTypes.DATE,
    last_upd_user_no: DataTypes.INTEGER
  }, {freezeTableName:true});
  t_error.associate = function(models) {
    // associations can be defined here
  };
  return t_error;
};
