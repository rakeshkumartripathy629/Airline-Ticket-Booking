"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class City extends Model {
    static associate(models) {
      // define association here (for example: City.hasMany(models.Airport))
    }
  }

  City.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "City",
      tableName: "Cities", // optional but good practice
      timestamps: true,
    }
  );

  return City;
};
