const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Artists', {
    artistId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'ArtistId'
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: 'Name'
    }
  }, {
    sequelize,
    tableName: 'artists',
    timestamps: false
  });
};
