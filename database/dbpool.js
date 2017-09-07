require('dotenv').config();
var mysql = require('mysql');
var config = require('./config/configuration');

var dbconfig = config.DBCONFIG.MODE == 'prod' ? config.DBCONFIG.PROD : config.DBCONFIG.DEV;
Object.assign(dbconfig, config.DBCONFIG.ETC);
var pool = mysql.createPool(dbconfig);
module.exports = pool;
