const assert = require('chai').assert;
const Stack = require('../../src/data_structures/ex3');

describe('Stack class', function () {
  it('Your Stack class should have a push method', function () {
    assert.equal(typeof (new Stack()).push, 'function');
  });

  it('Your Stack class should have a pop method', function () {
    assert.equal(typeof (new Stack()).pop, 'function');
  });

  it('Your Stack class should have a peek method', function () {
    assert.equal(typeof (new Stack()).peek, 'function');
  });

  it('Your Stack class should have a isEmpty method', function () {
    assert.equal(typeof (new Stack()).isEmpty, 'function');
  });

  it('Your Stack class should have a clear method', function () {
    assert.equal(typeof (new Stack()).clear, 'function');
  });
});
