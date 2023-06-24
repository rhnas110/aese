const { user, profile, _token } = require("../../../config/db");
const { sequelize } = require("../../../models");
const { hashPassword, comparePassword } = require("../../../utils/bcrypt");
const { uuidv4 } = require("../../../utils/uuid");
const { signToken } = require("../../../utils/jwt");
const { expiredDate } = require("../../../utils/day");
const schedule = require("node-schedule");

const jwt_expired = process.env.AESEPIRED;

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
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const checkUser = await user.findOne({
        where: { email: email || "" },
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      if (!checkUser) throw "User not found";

      const userInformation = {
        id: checkUser.id,
        role: checkUser.role,
        verified: checkUser.verified,
      };

      const checkPassword = await comparePassword(password, checkUser.password);
      if (!checkPassword) throw "Incorrect password";

      const token = signToken(userInformation, jwt_expired);
      await _token.create({
        idUser: userInformation.id,
        token,
        expired_date: expiredDate,
      });

      schedule.scheduleJob(
        expiredDate,
        async () =>
          await _token.destroy({
            where: {
              idUser: userInformation.id,
              token,
            },
          })
      );

      res.json({
        status: true,
        message: "Login Success",
        token,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  check_token: async (req, res) => {
    try {
      const { id, token } = req.user;
      const isExpired = await _token.findOne({ where: { token } });

      if (!isExpired)
        return res.status(401).json({
          message: "Token not found",
        });

      const userInformation = await user.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt", "password", "IdProfile"],
        },
        include: [
          {
            model: profile,
            attributes: ["nickname", "gender", "birthDate"],
          },
        ],
      });

      res.json({
        success: true,
        isExpired: false,
        userInformation,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  logout: async (req, res) => {
    try {
      const { id, token } = req.user;

      await _token.destroy({
        where: {
          idUser: id,
          token,
        },
      });

      res.json({
        success: true,
        message: "Logout Success",
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
