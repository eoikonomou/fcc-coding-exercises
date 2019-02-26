const assert = require('chai').assert;
const sym = require('../../src/algorithms/ex1');

describe('sym()', function () {
    it('should compute the symmetric difference of two or more arrays', function () {
        assert.deepEqual(sym([1, 2, 3, 3], [5, 2, 1, 4]).sort(), [3, 4, 5]);
        assert.deepEqual(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).sort(), [1, 4, 5]);
    });
});
