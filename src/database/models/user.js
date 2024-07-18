'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Seller, { foreignKey: 'cd_user', as: 'seller' })
    }
  }
  User.init({
    id: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'ci_user'
    },
    login: { 
      type: DataTypes.STRING, 
      allowNull: false,
      field: 'nm_login'
    },
    password:{ 
      type: DataTypes.STRING, 
      allowNull: false,
      field: 'nm_password'
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'tb_user',
    timestamps: false,
    paranoid: true
  });
  return User;
};