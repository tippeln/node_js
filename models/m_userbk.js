'use strict';
module.exports = (sequelize, DataTypes) => {
  const m_user = sequelize.define('m_user', {
    user_no: DataTypes.INTEGER ,
    user_id: {
      type:DataTypes.STRING(10),
      varidate: {
        notEmpty: true
      }
    },
    pwd: {
      type:DataTypes.STRING(200),
      varidate: {
        notEmpty: true
      }
    },
    user_nm: {
      type:DataTypes.STRING(30),
      varidate: {
        notEmpty: true
      }
    },
    last_logon_datetime: DataTypes.DATE,
    last_upd_datetime: DataTypes.DATE,
    last_upd_user_no: DataTypes.INTEGER
  }, {freezeTableName:true});
  m_user.associate = function(models) {
    // associations can be defined here
  };
  return m_user;
};
