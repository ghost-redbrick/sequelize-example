const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Invoices', {
    invoiceId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'InvoiceId'
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'CustomerId'
      },
      field: 'CustomerId'
    },
    invoiceDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'InvoiceDate'
    },
    billingAddress: {
      type: DataTypes.STRING(70),
      allowNull: true,
      field: 'BillingAddress'
    },
    billingCity: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'BillingCity'
    },
    billingState: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'BillingState'
    },
    billingCountry: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'BillingCountry'
    },
    billingPostalCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'BillingPostalCode'
    },
    total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      field: 'Total'
    }
  }, {
    sequelize,
    tableName: 'invoices',
    timestamps: false,
    indexes: [
      {
        name: "IFK_InvoiceCustomerId",
        fields: [
          { name: "CustomerId" },
        ]
      },
    ]
  });
};
