const { user, profile } = require("../../../config/db");
const { sequelize } = require("../../../models");
const { hashPassword } = require("../../../utils/bcrypt");
const { uuidv4 } = require("../../../utils/uuid");

module.exports = {
  registered: async (req, res) => {
    try {
      const { email } = req.body;
      const isRegistered = await user.findOne({
        where: { email: email || "" },
      });

      if (isRegistered) throw "Email already registered";
      else res.json({ status: true, isRegistered: false });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  register: async (req, res) => {
    let transaction;
    try {
      const { email, password, nickname, gender, birthDate } = req.body;
      const hashPass = await hashPassword(password);

      transaction = await sequelize.transaction();
      const idProfile = await profile.create(
        {
          nickname,
          gender,
          birthDate,
        },
        { transaction }
      );
      await user.create(
        {
          id: uuidv4(),
          email,
          password: hashPass,
          IdProfile: idProfile.dataValues.id,
        },
        { transaction }
      );

      await transaction.commit();
      res.status(201).json({ status: true, message: "Register Success" });
    } catch (error) {
      if (transaction) {
        await transaction.rollback();
        res.status(400).json(error);
      }
    }
  },
};
