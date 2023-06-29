const { user, code } = require("../../../config/db");

const { hashPassword, comparePassword } = require("../../../utils/bcrypt");
const { expiredDateResetPassword, now } = require("../../../utils/day");
const { generateOTP } = require("../../../utils/generateOTP");
const { emailResult, emailer } = require("../../../utils/email");
const { scheduleJob } = require("../../../utils/schedule");
const { captchaURL, captchaKey } = require("../../../config/captcha.config");
const axios = require("axios");

module.exports = {
  sendCodeResetPassword: async (req, res) => {
    try {
      const { email, token } = req.body;
      if (!token) throw "Invalid Captcha";

      const response = await axios.post(
        `${captchaURL}?secret=${captchaKey}&response=${token}`
      );
      const { success } = response.data;

      if (success) {
        const checkUser = await user.findOne({
          where: { email: email || "" },
          attributes: ["id", "email"],
        });
        if (!checkUser) throw "User not found";

        const checkCode = await code.findOne({
          where: { idUser: checkUser.id || "" },
        });

        const expired_date = expiredDateResetPassword;

        if (checkCode) {
          res.json({
            success: true,
            message: "The code has been sent, check your email",
            code: true,
          });
        } else {
          const _code = generateOTP(6);
          const hashCode = await hashPassword(_code);

          await code.create({
            idUser: checkUser.id,
            code: hashCode,
            expired_date,
            type: 1,
          });

          scheduleJob(
            expired_date,
            async () =>
              await code.destroy({
                where: {
                  idUser: checkUser.id,
                },
              })
          );

          const emailSend = emailResult(
            "../template/auth/codeResetPassword.html",
            { code: _code, time: now }
          );

          emailer({
            to: checkUser.email,
            subject: "[aese] Verification code for password reset",
            html: emailSend,
          });

          return res.json({
            success: true,
            message: "Sended code check your email",
            code: false,
          });
        }
      } else {
        return res.status(400).json({
          error: "Invalid Captcha",
        });
      }
    } catch (error) {
      res.status(400).json(error);
    }
  },
  verifyCodeResetPassword: async (req, res) => {
    try {
      const { email, code_v1 } = req.body;

      const checkUser = await user.findOne({
        where: { email: email || "" },
        attributes: ["id"],
      });
      if (!checkUser) throw "User not found";

      const checkCode = await code.findOne({
        where: { idUser: checkUser.id || "" },
      });
      if (!checkCode) throw "Code expired, please try again";

      const compareCode = await comparePassword(code_v1, checkCode.code);
      if (!compareCode) throw "Incorrect code";

      res.json({
        success: true,
        message: "Code Success",
        code_v1,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  resetPassword: async (req, res) => {
    try {
      const { email, password, confirmPassword, code_v1 } = req.body;
      if (!code_v1) throw "Session expired";

      const checkUser = await user.findOne({
        where: { email: email || "" },
        attributes: ["id"],
      });
      if (!checkUser) throw "User not found";

      if (password !== confirmPassword)
        throw "Confirm password does not match!";
      const hashPass = await hashPassword(password);

      const checkCode = await code.findOne({
        where: { idUser: checkUser.id || "" },
      });
      if (!checkCode) throw "Code expired, please try again";

      const compareCode = await comparePassword(code_v1, checkCode.code);
      if (!compareCode) throw "Incorrect code";

      await user.update(
        {
          password: hashPass,
        },
        {
          where: {
            email,
          },
        }
      );
      await code.destroy({
        where: {
          idUser: checkUser.id,
        },
      });

      res.json({
        success: true,
        message: "Reset Password Success",
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
