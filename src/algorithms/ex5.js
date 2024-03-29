// Algorithms: Implement Bubble Sort

/*
The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array
until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order.
The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity.
While simple, it is usually impractical in most situations.

Instructions: Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least
to greatest.

Note:
We are calling this function from behind the scenes; the test array we are using is commented out in the editor.
Try logging array to see your sorting algorithm in action!
*/
function bubbleSort(array) {
  // change code below this line
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        array[i] = [array[j], array[j] = array[i]][0];
      }
      console.log(array);
    }
  }
  // change code above this line
  return array;
}

module.exports = bubbleSort;
