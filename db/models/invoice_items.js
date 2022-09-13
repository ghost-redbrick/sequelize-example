const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('InvoiceItems', {
    invoiceLineId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'InvoiceLineId'
    },
    invoiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invoices',
        key: 'InvoiceId'
      },
      field: 'InvoiceId'
    },
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tracks',
        key: 'TrackId'
      },
      field: 'TrackId'
    },
    unitPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      field: 'UnitPrice'
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'Quantity'
    }
  }, {
    sequelize,
    tableName: 'invoice_items',
    timestamps: false,
    indexes: [
      {
        name: "IFK_InvoiceLineInvoiceId",
        fields: [
          { name: "InvoiceId" },
        ]
      },
      {
        name: "IFK_InvoiceLineTrackId",
        fields: [
          { name: "TrackId" },
        ]
      },
    ]
  });
};
