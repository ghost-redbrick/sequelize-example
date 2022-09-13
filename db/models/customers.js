const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customers', {
    customerId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'CustomerId'
    },
    firstName: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: 'FirstName'
    },
    lastName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'LastName'
    },
    company: {
      type: DataTypes.STRING(80),
      allowNull: true,
      field: 'Company'
    },
    address: {
      type: DataTypes.STRING(70),
      allowNull: true,
      field: 'Address'
    },
    city: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'City'
    },
    state: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'State'
    },
    country: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'Country'
    },
    postalCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'PostalCode'
    },
    phone: {
      type: DataTypes.STRING(24),
      allowNull: true,
      field: 'Phone'
    },
    fax: {
      type: DataTypes.STRING(24),
      allowNull: true,
      field: 'Fax'
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'Email'
    },
    supportRepId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'EmployeeId'
      },
      field: 'SupportRepId'
    }
  }, {
    sequelize,
    tableName: 'customers',
    timestamps: false,
    indexes: [
      {
        name: "IFK_CustomerSupportRepId",
        fields: [
          { name: "SupportRepId" },
        ]
      },
    ]
  });
};
