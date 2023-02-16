const assert = require('assert');
const hello = require('../app');

describe('App', function() {
  describe('#hello()', function() {
    it('should return the string "Hello, world!"', function() {
      assert.strictEqual(hello(), 'Hello, world!');
    });
  });
});
