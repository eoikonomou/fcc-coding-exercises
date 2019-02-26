const assert = require('chai').assert;
const homeworkStack = require('../../src/data_structures/ex2');

describe('Stacks', function () {
  it('homeworkStack should only contain 4 elements', function () {
    assert.equal(homeworkStack.length, 4);
  });

  it('The last element in homeworkStack should be "CS50"', function () {
    assert.equal(homeworkStack[homeworkStack.length - 1], "CS50");
  });

  it('homeworkStack should not contain "PSY44"', function () {
    assert.equal(homeworkStack.indexOf("PSY44"), -1);
  });
});
