// Algorithms: Implement Merge Sort

/*
Another intermediate sorting algorithm that is very common is merge sort. Like quick sort, merge sort also uses a divide-and-conquer,
recursive methodology to sort an array. It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted
in the first place. But we'll start with only one array as input, so how do we get to two sorted arrays from that? Well, we can recursively divide
the original input in two until we reach the base case of an array with one item. A single-item array is naturally sorted, so then we can start
combining. This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the
elements. The steps of merge sort, then, are:

1) Recursively split the input array in half until a sub-array with only one element is produced.
2) Merge each sorted sub-array together to produce the final sorted array.

Merge sort is an efficient sorting method, with time complexity of O(nlog(n)).
This algorithm is popular because it is performant and relatively easy to implement.

As an aside, this will be the last sorting algorithm we cover here.
However, later in the section on tree data structures we will describe heap sort, another efficient sorting method that requires a binary heap
in its implementation.

Instructions: Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order
from least to greatest. A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays,
and another function, for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge. Good luck!

Note:
We are calling this function from behind the scenes; the test array we are using is commented out in the editor.
Try logging array to see your sorting algorithm in action!
*/

function merge(array1, array2) {
  let result = []
  let index1 = 0
  let index2 = 0
  while (index1 < array1.length && index2 < array2.length) {
    if (array1[index1] < array2[index2]) {
      result.push(array1[index1])
      index1++
    } else {
      result.push(array2[index2])
      index2++
    }
  }
  return result.concat(array1.slice(index1)).concat(array2.slice(index2))
}

function mergeSort(array) {
  // change code below this line
  if (array.length === 1) {
    return array;
  }
  const midIndex = Math.floor(array.length / 2);
  const array1 = array.slice(0, midIndex);
  const array2 = array.slice(midIndex);
  return merge(
    mergeSort(array1),
    mergeSort(array2)
  );
}

module.exports = mergeSort;
