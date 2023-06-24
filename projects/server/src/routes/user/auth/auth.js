const router = require("express").Router();
const { auth } = require("../../../controllers");
const { verify_token } = require("../../../middlewares/verify_token");

router.post("/api/auth/registered", auth.registered);
router.post("/api/auth/register", auth.register);
router.post("/api/auth/login", auth.login);

router.get("/api/auth/check_token", verify_token, auth.check_token);
router.delete("/api/auth/logout", verify_token, auth.logout);

module.exports = router;
