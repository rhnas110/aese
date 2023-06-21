"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association
      user.belongsTo(models.profile, {
        foreignKey: "IdProfile",
      });
    }
  }
  user.init(
    {
      id: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          name: "email",
          msg: "Email duplicate",
        },
        allowNull: false,
      },
      password: { type: DataTypes.STRING, allowNull: false },
      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      // role as foreign with role table
      role: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    },
    {
      sequelize,
      modelName: "user",
      freezeTableName: true,
    }
  );
  return user;
};
