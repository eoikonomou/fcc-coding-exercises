// Algorithms: Find the Symmetric Difference

/*
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements
which are in either of the two sets, but not in both (A △ B = C = {1, 4}).
For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two
the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/

function sym(args) {
    var args = Array.prototype.slice.call(arguments);
    const getDiff = function (arr1, arr2) {
        function filterFunction(arr1, arr2) {
            return arr1.filter(el1 => arr2.indexOf(el1) === -1);
        }
        return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
    }
    return args.reduce(getDiff, []);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
