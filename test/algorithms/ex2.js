const assert = require('chai').assert;
const updateInventory = require('../../src/algorithms/ex2');

describe('sym()', function () {
    it('inventory after first delivery must contain 6 items', function () {
        assert.lengthOf(
            updateInventory(
                [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
                [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
            ), 6, 'Length must be 6');
    });

    it('The two inventories must be the same', function () {
        assert.deepEqual(
            updateInventory(
                [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
                [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
            ),
            [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
        );
    });

    it('Empty delivery must not alter inventory', function () {
        assert.deepEqual(
            updateInventory(
                [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
                []
            ),
            [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]
        );
    });

    it('The two inventories must much', function () {
        assert.deepEqual(
            updateInventory(
                [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]],
                [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]
            ),
            [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
        );
    });

    it('When inventory is empty return the delivery', function () {
        assert.deepEqual(
            updateInventory(
                [],
                [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
            ),
            [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]
        );
    });
});
