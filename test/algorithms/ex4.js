const assert = require('chai').assert;
const pairwise = require('../../algorithms/ex4');

describe('pairwise', function () {
  it('pairwise([1, 4, 2, 3, 0, 5], 7) should return 11', function () {
    assert.equal(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
  });

  it('pairwise([1, 3, 2, 4], 4) should return 1', function () {
    assert.equal(pairwise([1, 3, 2, 4], 4), 1);
  });

  it('pairwise([1, 1, 1], 2) should return 1', function () {
    assert.equal(pairwise([1, 1, 1], 2), 1);
  });

  it('pairwise([0, 0, 0, 0, 1, 1], 1) should return 10', function () {
    assert.equal(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
  });

  it('pairwise([], 100) should return 0', function () {
    assert.equal(pairwise([], 100), 0);
  });
});
