/** Write a function `uniqueElements(array)` that takes in an array of integers
 * and returns a new array with only the unique elements from the input array.
 * The returned array should be sorted in ascending order. */

/** Iterate through the array and create a property in the seen object for each
 *  array value. Set the value of the property to 1. If the seen object already
 *  has the property, increment its value by 1. Finally, loop through the
 *  properties of seen and add the names of all properties with a value of 1 to
 *  a new array.
 */
function uniqueElements(array) {
  let seen = {};
  let uniqueElements = [];
  for (i = 0; i < array.length; i++) {
    if (!seen.hasOwnProperty(array[i])) {
      seen[array[i]] = 1;
    } else {
      seen[array[i]] += 1;
    }
  }
  for (const prop in seen) {
    if (seen[prop] === 1) {
      uniqueElements.push(prop);
    }
  }

  return uniqueElements.sort((a, b) => a - b);
}

uniqueElements([1, 2, 3, 4, 1, 2, 3, 1, 1, 6, 5]); // returns [4,5,6]

