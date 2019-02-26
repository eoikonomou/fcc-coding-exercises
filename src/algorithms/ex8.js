// Algorithms: Implement Quick Sort

/*
Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array.
In this method, a pivot value is chosen in the original array.
The array is then partitioned into two subarrays of values less than and greater than the pivot value.
We then combine the result of recursively calling the quick sort algorithm on both sub-arrays.
This continues until the base case of an empty or single-item array is reached, which we return.
The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average.
It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order
from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here.
For simplicity, the first or last element could be used.

Note:
We are calling this function from behind the scenes; the test array we are using is commented out in the editor.
Try logging array to see your sorting algorithm in action!
*/
function quickSort(array) {
  // change code below this line
  const recursiveSort = (start, end) => {
    console.log(array);
    // If this sub-array contains less than 2 elements, it's sorted.
    if (end - start < 1) {
      return;
    }
    const pivotValue = array[end];
    let splitIndex = start;
    for (let i = start; i < end; i++) {
      const sort = array[i] < pivotValue ? -1 : 1;
      // This value is less than the pivot value.
      if (sort === -1) {
        // If the element just to the right of the split index,
        //   isn't this element, swap them.
        if (splitIndex !== i) {
          array[i] = [array[splitIndex], array[splitIndex] = array[i]][0];
        }
        // Move the split index to the right by one,
        //   denoting an increase in the less-than sub-array size.
        splitIndex++;
      }
      // Leave values that are greater than or equal to
      //   the pivot value where they are.
    }
    // Move the pivot value to between the split.
    array[end] = array[splitIndex];
    array[splitIndex] = pivotValue;

    // Recursively sort the less-than and greater-than arrays.
    recursiveSort(start, splitIndex - 1);
    recursiveSort(splitIndex + 1, end);
  };
  recursiveSort(0, array.length - 1);
  // change code above this line
  return array;
}

module.exports = quickSort;
