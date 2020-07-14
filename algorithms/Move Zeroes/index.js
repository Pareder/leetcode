/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * Input: nums = [0, 1, 0, 3, 12]
 * Output: [1, 3, 12, 0, 0]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let i = 0;
  let j = 1;
  while (i < j && j < nums.length) {
    if (nums[i] === 0) {
      if (nums[j] === 0) {
        j++;
        continue;
      }

      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }

    i++;
    j++;
  }
};
