"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class code extends Model {
    static associate(models) {
      // define association
      code.belongsTo(models.code_type, {
        foreignKey: { name: "type", allowNull: false },
      });
    }
  }
  code.init(
    {
      idUser: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expired_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "code",
      freezeTableName: true,
    }
  );
  return code;
};
