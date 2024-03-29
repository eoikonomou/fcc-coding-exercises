// Algorithms: Implement Insertion Sort

/*
The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list.
It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is
in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end.
This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order
from least to greatest.

Note:
We are calling this function from behind the scenes; the test array we are using is commented out in the editor.
Try logging array to see your sorting algorithm in action!
*/
function insertionSort(array) {
  // change code below this line
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        array[j - 1] = [array[j], array[j] = array[j - 1]][0];
      }
      console.log(array);
    }
  }
  // change code above this line
  return array;
}

module.exports = insertionSort;
