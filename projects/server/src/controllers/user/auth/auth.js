const { user, profile, _token } = require("../../../config/db");
const { sequelize } = require("../../../models");

const { hashPassword, comparePassword } = require("../../../utils/bcrypt");
const { uuidv4 } = require("../../../utils/uuid");
const { signToken } = require("../../../utils/jwt");
const { expiredDate } = require("../../../utils/day");
const { scheduleJob } = require("../../../utils/schedule");
const { getUserByEmail, deleteToken } = require("../../../helpers/user");
const { randomDefaultPicture } = require("../../../utils/picture");

const jwt_expired = process.env.AESEPIRED;

module.exports = {
  registered: async (req, res) => {
    try {
      const { email } = req.body;

      const _user = await getUserByEmail({ email });

      if (_user) throw "Email already registered";
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
      const id = uuidv4();
      const picture = randomDefaultPicture();
      await profile.create(
        {
          id,
          nickname,
          gender,
          birthDate,
          picture: `/public/profile/default/${picture}`,
        },
        { transaction }
      );
      await user.create(
        {
          id,
          email,
          password: hashPass,
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
      const _user = await getUserByEmail({ email });

      if (!_user) throw "User not found";

      const userInformation = {
        id: _user.id,
        role: _user.role,
        verified: _user.verified,
      };

      const checkPassword = await comparePassword(password, _user.password);
      if (!checkPassword) throw "Incorrect password";

      const expired_date = expiredDate;
      const token = signToken(userInformation, jwt_expired);
      await _token.create({
        id: userInformation.id,
        token,
        expired_date,
      });

      scheduleJob(expiredDate, async () => deleteToken(token));

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
          exclude: ["createdAt", "updatedAt", "password"],
        },
        include: [
          {
            model: profile,
            attributes: ["nickname", "gender", "birthDate", "picture"],
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
      const { token } = req.user;
      deleteToken(token);
      res.json({
        success: true,
        message: "Logout Success",
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
