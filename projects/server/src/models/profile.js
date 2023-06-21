"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    static associate(models) {
      // define association
      profile.hasOne(models.user, {
        foreignKey: "IdProfile",
      });
    }
  }
  profile.init(
    {
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your nickname",
          },
        },
      },
      gender: {
        type: DataTypes.ENUM("Male", "Female", "Other"),
        allowNull: false,
        validate: {
          isIn: {
            args: [["Male", "Female", "Other"]],
            msg: "Gender not found",
          },
        },
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your birthdate",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "profile",
      freezeTableName: true,
    }
  );
  return profile;
};
