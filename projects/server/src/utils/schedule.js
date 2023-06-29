const schedule = require("node-schedule");

const scheduleJob = (time, action) => schedule.scheduleJob(time, action);

module.exports = { scheduleJob };
