const assert = require('chai').assert;
const permAlone = require('../../algorithms/ex3');

describe('permAlone', function () {
  it('aab should return a number', function () {
    assert.equal(typeof permAlone('aab'), 'number');
  });

  it('aaa should return 0', function () {
    assert.equal(permAlone('aaa'), 0);
  });

  it('aabb should return 8', function () {
    assert.equal(permAlone('aabb'), 8);
  });

  it('abcdefa should return 3600', function () {
    assert.equal(permAlone('abcdefa'), 3600);
  });

  it('abfdefa should return 2640', function () {
    assert.equal(permAlone('abfdefa'), 2640);
  });

  it('zzzzzzzz should return 0', function () {
    assert.equal(permAlone('zzzzzzzz'), 0);
  });

  it('a should return 1', function () {
    assert.equal(permAlone('a'), 1);
  });

  it('aaab should return 0', function () {
    assert.equal(permAlone('aaab'), 0);
  });

  it('aaabb should return 12', function () {
    assert.equal(permAlone('aaabb'), 12);
  });
});
