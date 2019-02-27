const assert = require('chai').assert;
const PriorityQueue = require('../../src/data_structures/ex5');

describe("Create a PriorityQueue Class", function () {
  it('Your Queue class should have a enqueue method.', function () {
    assert.equal(typeof (new PriorityQueue()).enqueue, 'function');
  });
  it('Your Queue class should have a dequeue method.', function () {
    assert.equal(typeof (new PriorityQueue()).dequeue, 'function');
  });
  it('Your Queue class should have a size method.', function () {
    assert.equal(typeof (new PriorityQueue()).size, 'function');
  });
  it('Your Queue class should have an isEmpty method.', function () {
    assert.equal(typeof (new PriorityQueue()).isEmpty, 'function');
  });
  it('Your PriorityQueue should correctly keep track of the current number of items using the size method as items are enqueued and dequeued.', function () {
    const queue = new PriorityQueue();
    queue.enqueue(['hello', 1]);
    assert.equal(queue.size(), 1);
    queue.enqueue(['world', 2]);
    assert.equal(queue.size(), 2);
    queue.dequeue();
    assert.equal(queue.size(), 1);
  });
  it('The isEmpty method should return true when the queue is empty.', function () {
    const queue = new PriorityQueue();
    assert.equal(queue.isEmpty(), true);
  });
  it('The priority queue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.', function () {

  });
})
