require('dotenv').config();

module.exports = {
  MODE: process.env.TTDB_MODE,
  DEV: {
    host: process.env.TTDB_HOST_DEV,
    user: process.env.TTDB_USER_DEV,
    password: process.env.TTDB_PW_DEV,
    database: process.env.TTDB_DEV
  },
  PROD: {
    host: process.env.TTDB_HOST_PROD,
    user: process.env.TTDB_USER_PROD,
    password: process.env.TTDB_PW_PROD,
    database: process.env.TTDB_PROD
  },
  ETC: {
    dateStrings: true
  }
};
