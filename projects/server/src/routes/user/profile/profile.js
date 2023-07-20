const router = require("express").Router();
const { profile } = require("../../../controllers");
const { verify_token } = require("../../../middlewares/verify_token");
const { uploadProfilePicture } = require("../../../helpers/multer");

router.patch("/api/profile", verify_token, profile.settingsProfile);
router.patch(
  "/api/profile_picture",
  verify_token,
  uploadProfilePicture.single("picture"),
  profile.settingsProfilePicture
);

module.exports = router;
