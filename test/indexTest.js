var assert = require('assert');
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

    it('test insertQuery method', function() {
      var data = {
        'id': 1
      };
      index.insertQuery("test", data,
        function(error, results) {
          assert.equal(error, "data");
        });
    });
  });
  describe('Module config/configuration.js', function() {
    it('check for dbpool', function() {
      assert.equal(typeof config, 'object');
      assert.ok(config, 'dbpool instance must not be null');
      assert.equal(config.MODE, "dev");
      assert.equal(config.DEV.host, "localhost");
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
