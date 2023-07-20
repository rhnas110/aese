const { profile } = require("../../../config/db");

module.exports = {
  settingsProfile: async (req, res) => {
    try {
      const { id } = req.user;
      const { nickname, gender, birthDate } = req.body;
      await profile.update(
        { nickname, gender, birthDate },
        {
          where: { id },
        }
      );
      res.status(201).send({
        success: true,
        message: "Update Profile Success",
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  settingsProfilePicture: async (req, res) => {
    try {
      const { id } = req.user;
      let fileUploaded = req.file;
      if (!fileUploaded) throw "Picture not found";

      await profile.update(
        {
          picture: `/public/profile/${fileUploaded.filename}`,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(201).send({
        success: true,
        message: "Update Picture Success",
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
