const handlebars = require("handlebars");
const transporter = require("../helpers/transporter");
const fs = require("fs");
const { resolve } = require("path");

const emailResult = (pathEmail, data) => {
  const tempEmail = fs.readFileSync(resolve(__dirname, pathEmail), "utf-8");
  const tempCompile = handlebars.compile(tempEmail);
  const tempResult = tempCompile(data);
  return tempResult;
};

const emailer = async ({ to, subject, html }) =>
  await transporter.sendMail({
    from: "noreply.aese@gmail.com",
    to: to,
    subject: subject,
    html: html,
  });

module.exports = { emailResult, emailer };
