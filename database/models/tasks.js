'use strict';
module.exports = (sequelize, DataTypes) => {
  var tasks = sequelize.define('tasks', {
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    finished: DataTypes.BOOLEAN
  }, {});
  tasks.associate = function(models) {
    // associations can be defined here
  };
  return tasks;
};