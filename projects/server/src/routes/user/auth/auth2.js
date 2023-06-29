const router = require("express").Router();
const { auth2 } = require("../../../controllers");

router.post("/api/auth/coderesetpassword", auth2.sendCodeResetPassword);
router.post("/api/auth/verifyresetpassword", auth2.verifyCodeResetPassword);
router.post("/api/auth/resetpassword", auth2.resetPassword);

module.exports = router;
