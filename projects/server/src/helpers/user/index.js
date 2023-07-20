const { user, code, _token } = require("../../config/db");

const getUserByEmail = async ({ email }) => {
  const res = await user.findOne({ where: { email: email || "" } });
  return res;
};

const getUserCodeResetPassword = async ({ id }) => {
  // type === 1 is code for reset password
  const res = await code.findOne({
    where: { id: id || "", type: 1 },
  });
  return res;
};

const deleteToken = async (token) =>
  await _token.destroy({
    where: {
      token,
    },
  });

const deleteCodeResetPassword = async (id) =>
  await code.destroy({
    where: {
      id,
      type: 1,
    },
  });

module.exports = {
  getUserByEmail,
  getUserCodeResetPassword,
  deleteToken,
  deleteCodeResetPassword,
};
