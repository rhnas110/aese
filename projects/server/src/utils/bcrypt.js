const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, salt);
  return hashPass;
};

const comparePassword = async (password, secondPassword) =>
  await bcrypt.compare(password, secondPassword);

module.exports = { hashPassword, comparePassword };
