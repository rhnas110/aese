const dayjs = require("dayjs");

const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
const expiredDate = dayjs().add(1, "day").format("YYYY-MM-DD HH:mm:ss");
const expiredDateResetPassword = dayjs()
  .add(15, "minutes")
  .format("YYYY-MM-DD HH:mm:ss");

module.exports = { now, expiredDate, expiredDateResetPassword };
