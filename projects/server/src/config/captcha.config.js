const captchaURL = "https://www.google.com/recaptcha/api/siteverify";
const captchaKey = process.env.CAPTCHA_SECRET;

module.exports = { captchaURL, captchaKey };
