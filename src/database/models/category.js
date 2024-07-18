'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasOne(models.Product, { foreignKey: 'cd_category', as: 'product' })
    }
  }
  Category.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'ci_category'
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nm_category'
    }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'tb_category',
    timestamps: false
  });
  return Category;
};