var mysql = require('mysql');
var config = require('../config/configuration');

var dbconfig = config.MODE == 'prod' ? config.PROD : config.DEV;
Object.assign(dbconfig, config.ETC);
var pool = mysql.createPool(dbconfig);
module.exports = pool;
