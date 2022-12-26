/**  Write a function that takes in a string of roman numerals and convert it to integer.
 */

function romanToInt(string) {
  let romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let result = 0;
  string = string.toUpperCase();
  for (i = 0; i < string.length; i++) {
    let doubleLetter = string[i] + string[i + 1];
    if (romans.hasOwnProperty(doubleLetter)) {
      result += parseInt(romans[doubleLetter]);
      i++;
    } else if (romans.hasOwnProperty(string[i])) {
      result += parseInt(romans[string[i]]);
    } else {
      return `'${string[i]}' doesn't represent roman numeral!`;
    }
  }
  return result;
}
romanToInteger("CMXLII");

/** Given an intiger array `nums` sorted in non-decreasing order, remove the duplicates in-place
 * such that each unique element appears only once. The relative order of the elements should be
 * kept the same.
 *
 * Result must be placed in the first part of the array `nums`. More formally, if there are `k`
 * elements after removing the duplicates, then first `k` elements of `nums` should hold the final
 * retusl. It does not matter what is left beyond the first `k` elements
 */

function removeDuplicates(nums) {
  let notUnique = 0;
  for (i = 1; i < nums.length - notUnique; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      nums.push("_");
      notUnique++;
      i--;
    }
  }
  return nums;
}

removeDuplicates([1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 10, 11, 11, 12]);
// return [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, '_', '_', '_', '_']


/**  Given a sorted array of distinct integers and a target value, return index if the target is found.
 * if not, return the index where it would be if it were inserted in order.
 */

function searchInsert(nums, target){
    for(i = 0; i < nums.length; i++){
        if(nums[i] == target){
            return i;
        }else if(nums[i] > target){
            return i;
        }
    }
    return nums.length;
}
searchInsert([1,3,4,6], 2) // returns 1