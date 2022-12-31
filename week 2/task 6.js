/** Write a function called sumOfTwo that takes two arrays of integers a
 * and b and a target integer t, and returns a boolean indicating whether
 * there is a pair of elements in the arrays that add up to the target.
 * You may assume that each array has unique elements and that the elements
 * are in sorted order. */

function sumOfTwo(a, b, t) {
  let ai = 0,
    bi = 0;
  while (ai < a.length && bi < b.length) {
    let sum = a[ai] + b[bi];
    if (sum === t) {
      return true;
    } else if (sum < t) {
      ai++;
    } else {
      bi++;
    }
  }
  return false;
}

sumOfTwo([1, 2, 3], [4, 5, 6], 7);

/** Write a function called flattenArray that takes an array of arrays as an argument
 * and returns a new array containing all the elements of the original array, 
 * flattened into a single array. 
 * */

function flattenArray(arr){
    return arr.flat(Infinity);
}

flattenArray([[1, 2], [3, 4, [5, 6]]])
