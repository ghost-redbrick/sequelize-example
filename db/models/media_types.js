const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MediaTypes', {
    mediaTypeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'MediaTypeId'
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: 'Name'
    }
  }, {
    sequelize,
    tableName: 'media_types',
    timestamps: false
  });
};
