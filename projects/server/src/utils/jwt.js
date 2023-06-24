const jwt = require("jsonwebtoken");
const jwt_key = process.env.AESECRET;

const signToken = (payload, expired) =>
  jwt.sign(payload, jwt_key, { expiresIn: expired });

const validateToken = (token) => jwt.verify(token, jwt_key);

module.exports = {
  signToken,
  validateToken,
};
