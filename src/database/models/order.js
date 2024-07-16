'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Customer, { foreignKey: 'cd_customer', as: 'customer' })
    }
  }
  Order.init({
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'ci_order'
    },
    valueTotal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'vl_total'
    },
    dateOrder: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'dt_order'
    },
    dateDelivery: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'dt_delivery'
    },
    statusDelivery: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'tp_status_delivery'
    }
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'tb_order',
    timestamps: false,
  });
  return Order;
};