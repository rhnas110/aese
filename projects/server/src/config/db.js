const database = require("../models");
const user = database.user;
const profile = database.profile;
const _token = database.token;
const code = database.code;

module.exports = { database, user, profile, _token, code };
