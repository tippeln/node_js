'use strict';
module.exports = (sequelize, DataTypes) => {
  const m_user = sequelize.define('m_user', {
    user_no: DataTypes.INTEGER ,
    user_id: DataTypes.STRING(10)  ,
    pwd: DataTypes.STRING(200),
    user_nm: DataTypes.STRING(30),
    last_logon_datetime: DataTypes.DATE,
    last_upd_datetime: DataTypes.DATE,
    last_upd_user_no: DataTypes.INTEGER
  }, {freezeTableName:true});
  m_user.associate = function(models) {
    // associations can be defined here
  };
  return m_user;
};
