'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cleaning extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cleaning.init({
    name: DataTypes.STRING,
    wash: {
      type: DataTypes.ENUM('Shampoo', 'Condition', 'Drying'),
      defaultValue: 'Shampoo'
    },
    dogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Dogs',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Cleaning',
  });
  return Cleaning;
};