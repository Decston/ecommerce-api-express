'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Seller.belongsTo(models.User, { foreignKey: 'cd_user' })
    }
  }
  Seller.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'ci_seller'
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
    },
    cdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cd_user'
    }
  }, {
    sequelize,
    modelName: 'Seller',
    tableName: 'tb_seller',
    timestamps: false
  });
  return Seller;
};