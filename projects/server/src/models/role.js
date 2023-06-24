"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    static associate(models) {
      // define association
    }
  }
  role.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "role",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return role;
};
