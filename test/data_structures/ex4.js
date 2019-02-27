const assert = require('chai').assert;
const Queue = require('../../src/data_structures/ex4');

describe('Create a Queue Class', function () {
  it('Your Queue class should have a enqueue method', function () {
    assert.equal(typeof (new Queue()).enqueue, 'function');
  });
  it('Your Queue class should have a dequeue method.', function () {
    assert.equal(typeof (new Queue()).dequeue, 'function');
  });
  it('Your Queue class should have a front method.', function () {
    assert.equal(typeof (new Queue()).front, 'function');
  });
  it('Your Queue class should have a size method.', function () {
    assert.equal(typeof (new Queue()).size, 'function');
  });
  it('Your Queue class should have an isEmpty method.', function () {
    assert.equal(typeof (new Queue()).isEmpty, 'function');
  });
  it('The dequeue method should remove and return the front element of the queue', function () {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    assert.equal(queue.dequeue(), 1);
    assert.equal(queue.size(), 1, 'Dequeue should remove elements from Queue');
  });
  it('The front method should return value of the front element of the queue', function () {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    assert.equal(queue.front(), 1);
    assert.equal(queue.size(), 2, 'front should not remove elements from Queue');
  });
  it('The size method should return the length of the queue', function () {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    assert.equal(queue.size(), 2);
  });
  it('The isEmpty method should return false if there are elements in the queue', function () {
    let queue = new Queue();
    assert.equal(queue.isEmpty(), true, 'isEmpty must return true if there are no items in the Queue');
    queue.enqueue(1);
    queue.enqueue(2);
    assert.equal(queue.isEmpty(), false, 'isEmpty must return false if there are items in the Queue');
  });
});
