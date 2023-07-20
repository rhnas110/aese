const { user, code } = require("../../../config/db");
const { captchaURL, captchaKey } = require("../../../config/captcha.config");

const { hashPassword, comparePassword } = require("../../../utils/bcrypt");
const { expiredDateResetPassword, now } = require("../../../utils/day");
const { generateOTP } = require("../../../utils/generateOTP");
const { emailResult, emailer } = require("../../../utils/email");
const { scheduleJob } = require("../../../utils/schedule");
const {
  getUserByEmail,
  getUserCodeResetPassword,
  deleteCodeResetPassword,
} = require("../../../helpers/user");

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
        const _user = await getUserByEmail({ email });
        if (!_user) throw "User not found";

        const _code = await getUserCodeResetPassword({ id: _user.id });

        if (_code) {
          res.json({
            success: true,
            message: "The code has been sent, check your email",
            code: true,
          });
        } else {
          const _otp = generateOTP(6);
          const hashCode = await hashPassword(_otp);
          const expired_date = expiredDateResetPassword;

          await code.create({
            id: _user.id,
            code: hashCode,
            expired_date,
            type: 1,
          });

          scheduleJob(expired_date, async () =>
            deleteCodeResetPassword(_user.id)
          );

          const emailSend = emailResult(
            "../template/auth/codeResetPassword.html",
            { code: _otp, time: now }
          );

          emailer({
            to: _user.email,
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

      const _user = await getUserByEmail({ email });
      if (!_user) throw "User not found";

      const _code = await getUserCodeResetPassword({ id: _user.id });
      if (!_code) throw "Code expired, please try again";

      const compareCode = await comparePassword(code_v1, _code.code);
      if (!compareCode) throw "Incorrect code";

      res.json({
        success: true,
        message: "Code Verified",
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

      const _user = await getUserByEmail({ email });
      if (!_user) throw "User not found";

      if (password !== confirmPassword)
        throw "Confirm password does not match!";
      const hashPass = await hashPassword(password);

      const _code = await getUserCodeResetPassword({ id: _user.id });
      if (!_code) throw "Code expired, please try again";

      const compareCode = await comparePassword(code_v1, _code.code);
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
      deleteCodeResetPassword(_user.id);

      res.json({
        success: true,
        message: "Reset Password Success",
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
