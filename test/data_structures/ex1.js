const assert = require('chai').assert;
const { i32View, buffer } = require('../../src/data_structures/ex1');

describe('Typed Structures', function () {
  it('i32View must have a 64 bytes large buffer', function () {
    assert.equal(buffer.byteLength, 64);
  });

  it('i32View must be 64 bytes large', function () {
    assert.equal(i32View.byteLength, 64);
  });

  it('i32View must be 16 elements long', function () {
    assert.equal(i32View.length, 16);
  });
});
