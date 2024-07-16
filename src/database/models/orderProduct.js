'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        models.Order.belongsToMany(models.Product, { 
            through: OrderProduct,
            foreignKey: 'cd_order',
            otherKey: 'cd_product', 
            as: 'products'
        });
        models.Product.belongsToMany(models.Order, { 
            through: OrderProduct,
            foreignKey: 'cd_product',
            otherKey: 'cd_order', 
            as: 'orders'
        });
    }
  }
  OrderProduct.init({

  }, {
    sequelize,
    modelName: 'OrderProduct',
    tableName: 'tb_order_product',
    timestamps: false,
  });
  return OrderProduct;
};