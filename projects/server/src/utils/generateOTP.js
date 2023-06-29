function generateOTP(length = 4) {
  let OTP = "";
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const len = characters.length;

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * len);
    OTP += characters[index];
  }

  return OTP;
}

module.exports = { generateOTP };
