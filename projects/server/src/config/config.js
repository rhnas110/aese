const { DB_USERNAME_DEV, DB_PASSWORD_DEV, DB_SOURCE_DEV } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME_DEV,
    password: DB_PASSWORD_DEV,
    database: DB_SOURCE_DEV,
    host: "127.0.0.1",
    dialect: "mysql",
    dialectOptions: {
      useUTC: false,
    },
    timezone: "+07:00",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
