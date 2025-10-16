
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    static associate(models) {
      // define association here (later)
    }
  }
  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Airplane",
      tableName: "Airplanes",
      timestamps: true,
    }
  );
  return Airplane;
};
