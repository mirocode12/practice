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

/** Write a function `validatePassword(password)` that takes in a string and returns
 *  a boolean indicating whether or not the password is valid. A password is
 *  considered valid if it meets the following criteria:
 *
 *      It is at least 8 characters long.
 *      It contains at least one lowercase letter (a-z).
 *      It contains at least one uppercase letter (A-Z).
 *      It contains at least one number (0-9).
 */

function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/;
  return regex.test(password);
}

validatePassword("mirosal12Gv");

/** Write a function `longestSubstring(string)` that takes in a string and returns the
 *  length of the longest substring without repeating characters. */

function longestSubstring(string) {
  let left = 0,
    longestStr = 0,
    count = 0;
  for (i = 0; i <= string.length; i++) {
    if (string.slice(left, i).includes(string[i])) {
      if (i !== left) {
        left++;
        i--;
      }
    } else {
      if (longestStr < i - left) {
        longestStr = i - left;
      }
    }
  }
  return longestStr;
}
longestSubstring('abcabcbb') //returns 3
longestSubstring('bbbbb') // returns 1
longestSubstring('pwwkew') //returns 3
