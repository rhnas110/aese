"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class code_type extends Model {
    static associate(models) {
      // define association
      code_type.hasOne(models.code, {
        foreignKey: "type",
      });
    }
  }
  code_type.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "code_type",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return code_type;
};
