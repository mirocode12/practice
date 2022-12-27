/** Given an integer array nums and an integer val, remove all occurrences of val in 
 * nums in-place. The relative order of the elements may be changed.

 - Result must be placed in the first part of the array nums. More formally, 
 * if there are k elements after removing the duplicates, then the first k elements of 
 * nums should hold the final result. It does not matter what you leave beyond the first 
 * k elements.

 * Return k after placing the final result in the first k slots of nums.

 * Do not allocate extra space for another array. You must do this by modifying the input
 * array in-place.
 */

function removeElement(nums, val) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = "_";
    }
  }
  return nums.sort();
}

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
// returns [0, 0, 1, 3, 4, '_', '_', '_']


