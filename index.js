var dbcpool = require('./database/dbpool');

/**
 * 
 * @param {String} table 
 * @param {*} row 
 * @param {*} done 
 */
function insertQuery(table, row, done) {
  //TODO add validation for json data. Json schema must be sync with database schema.
  var query = dbcpool.query('INSERT INTO ?? SET ?', [table, row], function(error, results, fields) {
    if (error) throw error;
    done(error, results);
  });
}

function updateQuery(table, row, where, done) {
  //TODO add validation for json data. Json schema must be sync with database schema.
  //var where = {};
  //where[primaryKeyName] = primaryKeyValue;
  var query = dbcpool.query('UPDATE ?? SET ? WHERE ?', [table, row, where], function(error, results, fields) {
    if (error) throw error;
    done(error, results);
  });
}

function findQuery(table, where, done) {
  //TODO add validation for json data. Json schema must be sync with database schema.
  var query = dbcpool.query('SELECT * FROM ?? WHERE ?', [table, where], function(error, results, fields) {
    if (error) throw error;
    done(error, results);
  });
}

function deleteQuery(table, row, done) {
  //TODO add validation for json data. Json schema must be sync with database schema.
  var query = dbcpool.query('DELETE FROM ??  WHERE ?', [table, row], function(error, results, fields) {
    if (error) throw error;
    done(error, results);
  });
}

function fetchTableQuery(table, done) {
  var query = dbcpool.query('SELECT * FROM ??', [table], function(error, results, fields) {
    if (error) throw error;
    done(error, results);
  });
}

/**
 * The method accepts custom query in the form of {String} with the parameters as {Array} of 
 * {String} and a callback {Function} capture the results from the database to the 
 * higher level of the application.
 * 
 * @param {String} query 
 * @param {Array<String>} valueArray 
 * @param {Function} done 
 */
function customQuery(query, valueArray, done) {
  var query = dbcpool.query(query, valueArray, function(error, results, fields) {
    if (error) throw error;
    done(error, results);
  });
}

// function innerJoinQuery(tableArray, selectColumArray, , done) {
//   var query = dbcpool.query('SELECT * FROM ??', [table], function(error, results, fields) {
//     if (error) throw error;
//     done(error, results);
//   });
// }

// function innerLeftJoinQuery(tableArray, selectColumArray, , done) {
//   var query = dbcpool.query('SELECT * FROM ??', [table], function(error, results, fields) {
//     if (error) throw error;
//     done(error, results);
//   });
// }

// function innerRightJoinQuery(tableArray, selectColumArray, , done) {
//   var query = dbcpool.query('SELECT * FROM ??', [table], function(error, results, fields) {
//     if (error) throw error;
//     done(error, results);
//   });
// }

// function outerFullJoinQuery(tableArray, selectColumArray, , done) {
//   var query = dbcpool.query('SELECT * FROM ??', [table], function(error, results, fields) {
//     if (error) throw error;
//     done(error, results);
//   });
// }

// function unionQuery(tableArray, selectColumArray, isUnionAll, where, orderedBy, done) {

//   var queryString = 'SELECT selectColumArray FROM '

//   var query = dbcpool.query('SELECT * FROM ??', [table], function(error, results, fields) {
//     if (error) throw error;
//     done(error, results);
//   });
// }

exports.insertQuery = insertQuery;
exports.updateQuery = updateQuery;
exports.findQuery = findQuery;
exports.deleteQuery = deleteQuery;
exports.fetchTableQuery = fetchTableQuery;
exports.customQuery = customQuery;