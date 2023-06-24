const { validateToken } = require("../utils/jwt");

module.exports = {
  verify_token: (req, res, next) => {
    const tokenHeader = req.headers.authorization || req.headers.Authorization;

    if (!tokenHeader)
      return res.status(401).json({
        message: "Token not found",
      });

    try {
      const token = tokenHeader.split(" ")[1];
      const verifiedToken = validateToken(token);

      if (!verifiedToken)
        return res.status(401).json({ message: "Unauthorized Request" });

      req.user = { ...verifiedToken, token };
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({
        message: "Invalid token",
      });
    }
  },
};
