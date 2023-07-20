"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class role_type extends Model {
    static associate(models) {
      // define association
      role_type.hasOne(models.user, {
        foreignKey: "role",
      });
    }
  }
  role_type.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "role_type",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return role_type;
};
