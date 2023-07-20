const multer = require("multer");
const path = require("path");

const storageProfilePicture = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, path.join(__dirname, "../public/profile"));
  },
  filename: (_, file, cb) => {
    cb(
      null,
      "aese" +
        "_" +
        new Date().getFullYear() +
        Math.round(Math.random() * 88888) +
        "." +
        file.mimetype.split("/")[1]
    );
  },
});

const uploadProfilePicture = multer({
  storage: storageProfilePicture,
  limits: { fileSize: 1024000 },
  fileFilter(_, file, cb) {
    const passEXT = [".jpg", ".jpeg", ".png"];
    const extPicture = path.extname(file.originalname).toLowerCase();

    if (!passEXT.includes(extPicture)) {
      const error = new Error("Please upload image file (jpg, jpeg, png)");
      return cb(error);
    }
    cb(null, true);
  },
});

module.exports = { uploadProfilePicture };
