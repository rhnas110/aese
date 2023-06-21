const router = require("express").Router();
const { auth } = require("../../../controllers");

router.post("/api/auth/registered", auth.registered);
router.post("/api/auth/register", auth.register);

module.exports = router;
