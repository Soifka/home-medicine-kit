'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Kit.hasMany(models.Medicine, {
        foreignKey: 'kitId'
      });
    }
  }
  Kit.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    noteToKit: {
      field: 'note_to_kit',
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Kit',
    tableName: 'kits',
    underscored: true
  });
  return Kit;
};