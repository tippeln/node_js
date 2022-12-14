'use strict';
module.exports = (sequelize, DataTypes) => {
  const t_status = sequelize.define('t_status', {
    shorei_no: DataTypes.INTEGER ,
    status: DataTypes.INTEGER ,
    last_upd_datetime: DataTypes.DATE,
    last_upd_user_no: DataTypes.INTEGER
  }, {freezeTableName:true});
  t_status.associate = function(models) {
    // associations can be defined here
  };
  return t_status;
};
