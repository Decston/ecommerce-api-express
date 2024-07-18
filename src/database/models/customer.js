'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.hasOne(models.Order, { foreignKey: 'cd_customer', as: 'order' });
      Customer.belongsTo(models.User, { foreignKey: 'cd_user', as: 'user' });
    }
  }
  Customer.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'ci_customer'
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_address'
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'nr_phone'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_email'
    }
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'tb_customer',
    timestamps: false
  });
  return Customer;
};