const fs = require("fs");
const path = require("path");

const defaultPictureFolder = path.join(__dirname, "../public/profile/default");

const getDefaultPicture = () => {
  const files = fs.readdirSync(defaultPictureFolder);
  try {
    return files;
  } catch (error) {
    console.log(error);
  }
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomDefaultPicture = () => {
  const picture = getDefaultPicture();
  const index = randomIntFromInterval(0, picture.length);
  return picture[index];
};

module.exports = { randomDefaultPicture };
