const { deleteToken } = require("../helpers/user");
const { validateToken } = require("../utils/jwt");

module.exports = {
  verify_token: (req, res, next) => {
    const tokenHeader = req.headers.authorization || req.headers.Authorization;

    if (!tokenHeader)
      return res.status(401).json({
        message: "Token not found",
      });

    try {
      var token = tokenHeader.split(" ")[1];
      const verifiedToken = validateToken(token);

      if (!verifiedToken)
        return res.status(401).json({ message: "Unauthorized Request" });

      req.user = { ...verifiedToken, token };
      next();
    } catch (error) {
      deleteToken(token);
      res.status(401).json({
        message: "Invalid token",
      });
    }
  },
};
