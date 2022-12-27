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


/** You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two
 *  integers m and n, representing the number of elements in nums1 and nums2 respectively.

 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.

 * The final sorted array should not be returned by the function, but instead be stored inside the 
 * array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote
 * the elements that should be merged, and the last n elements are set to 0 and should be ignored.
 * nums2 has a length of n.
 */

function merge (nums1, m, nums2, n) {
    for(i = 0; i < n; i++){
        nums1[m+i] = nums2[i];
    }
    return nums1.sort((a,b) => a - b);
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3) // returns [1, 2, 2, 3, 5, 6]
