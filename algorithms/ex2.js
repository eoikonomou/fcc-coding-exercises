// Algorithms: Inventory Update

/*
    Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
    Update the current existing inventory item quantities (in arr1).
    If an item cannot be found, add the new item and quantity into the inventory array.
    The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let index = 0;
    arr2.forEach(subArray2 => {
        let subArray = arr1.find(subArray1 => subArray1[1] === subArray2[1]);
        if (subArray === undefined) {
            arr1.splice(index, 0, subArray2);
            index++;
        } else {
            if (arr1.indexOf(subArray) > index) {
                index = arr1.indexOf(subArray);
            }
            index++;
            subArray[0] += subArray2[0];
        }
    });
    return arr1.sort((a, b) => a[1] + b[1]);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

module.exports = updateInventory;
