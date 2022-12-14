'use strict';
module.exports = (sequelize, DataTypes) => {
  const t_shorei = sequelize.define('t_shorei', {
    shorei_no: DataTypes.INTEGER ,
    senmon: DataTypes.INTEGER ,
    nendo: DataTypes.INTEGER ,
    shubetsu: DataTypes.INTEGER ,
    shinryoka: DataTypes.INTEGER ,
    csv_file_nm: DataTypes.STRING(100), 
    mail_address: DataTypes.STRING(100), 
    upd_user_no: DataTypes.INTEGER,
    upd_datetime: DataTypes.DATE,
    innai_kanri_cd: DataTypes.STRING(20), 
    //省略
    last_upd_datetime: DataTypes.DATE,
    last_upd_user_no: DataTypes.INTEGER
  }, {freezeTableName:true});
  t_shorei.associate = function(models) {
    // associations can be defined here
  };
  return t_shorei;
};
