'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Product.init({
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'ci_product'
    },
    nameProduct: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nm_product'
    },
    valueCost: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'vl_cost'
    },
    datePosted: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'dt_posted'
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'tb_product',
    timestamps: false,
  });
  return Product;
};