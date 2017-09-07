var mysql = require('mysql');
var dbcpool = require('./database/dbcpool');

function insertQuery(table, row, cb) {
  //TODO add validation for json data. Json schema must be sync with database schema.
  var query = dbcpool.query('INSERT INTO ?? SET ?', [table, row], function(error, results, fields) {
    if (error) throw error;
    console.log(table, '- results :', results);
    cb(error, results);
  });
}

function updateQuery(table, row, where, cb) {
  //TODO add validation for json data. Json schema must be sync with database schema.
  //var where = {};
  //where[primaryKeyName] = primaryKeyValue;
  var query = dbcpool.query('UPDATE ?? SET ? WHERE ?', [table, row, where], function(error, results, fields) {
    if (error) throw error;
    console.log(table, '- results :', results);
    cb(error, results);
  });
}

function findQuery(table, where, cb) {
  //TODO add validation for json data. Json schema must be sync with database schema.
  var query = dbcpool.query('SELECT * FROM ?? WHERE ?', [table, where], function(error, results, fields) {
    if (error) throw error;
    console.log(table, '- results :', results);
    cb(error, results);
  });
}

function deleteQuery(table, row, cb) {
  //TODO add validation for json data. Json schema must be sync with database schema.
  var query = dbcpool.query('DELETE FROM ??  WHERE ?', [table, row], function(error, results, fields) {
    if (error) throw error;
    console.log(table, ' - results :', results);
    cb(error, results);
  });
}

exports.insertQuery = insertQuery;
exports.updateQuery = updateQuery;
exports.findQuery = findQuery;
exports.deleteQuery = deleteQuery;
