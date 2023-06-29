const { createTransport } = require("nodemailer");

const { AESEMAIL_USER, AESEMAIL_PASS } = process.env;

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: AESEMAIL_USER,
    pass: AESEMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
