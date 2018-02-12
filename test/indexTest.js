var assert = require('assert');
var expect = require('chai').expect
var index = require('../index'); // our module
var dbpool = require('../database/dbpool');
var config = require('../config/configuration');

describe('Node Mysql Wrapper', function() {
  describe('Module index.js', function() {
    it('should have all methods', function() {
      assert.equal(typeof index, 'object');
      assert.equal(typeof index.insertQuery, 'function');
      assert.equal(typeof index.updateQuery, 'function');
      assert.equal(typeof index.findQuery, 'function');
      assert.equal(typeof index.deleteQuery, 'function');
    });

    // it('positive test insertQuery method', function(done) {
    //   var data = {
    //     'id': 2
    //   };
    //   var callback  = function(error, results) {
    //     assert.equal(error, null);
    //     assert.equal(results.affectedRows, 1);
    //     done();
    //   };
    //   index.insertQuery("test", data, callback);
    // });

    //TODO fix this test case
    // it('negative test insertQuery method', function(err, done) {
    //   expect(() =>index.insertQuery("no_table", {'id': 2}, null)).to.throw(
    //     new Error("Uncaught Error: ER_NO_SUCH_TABLE: Table 'test.no_table' doesn't exist"));
    // });

    // it('positive test customQuery method', function(done) {
    //   var data = {'id': 3};
    //   var query = 'INSERT INTO ?? SET ?';
    //   var callback  = function(error, results) {
    //     assert.equal(error, null);
    //     assert.equal(results.affectedRows, 1);
    //     done();
    //   };
    //   index.customQuery(query, ['test', data], callback);
    // });

    //TODO write negative test case as well.
  });
  describe('Module config/configuration.js', function() {
    it('check for dbpool', function() {
      assert.equal(typeof config, 'object');
      assert.ok(config, 'dbpool instance must not be null');
      assert.equal(config.MODE, "dev");
      assert.equal(config.DEV.host, "127.0.0.1");
      assert.equal(config.DEV.user, "root");
      assert.equal(config.DEV.password, "admin");
      assert.equal(config.DEV.database, "test");
    });
  });
  describe('Module database/dbpool.js', function() {
    it('check for dbpool', function() {
      assert.equal(typeof dbpool, 'object');
      assert.ok(dbpool, 'dbpool instance must not be null');
    });
  });
});
