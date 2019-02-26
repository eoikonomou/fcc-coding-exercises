const assert = require('chai').assert;
const mergeSort = require('../../src/algorithms/ex9');

describe('mergeSort', function () {
  it('mergeSort should sort the array', function () {
    assert.deepEqual(
      mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]),
      [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]
    );
  });
});
