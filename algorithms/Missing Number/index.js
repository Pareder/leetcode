/**
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
 *
 * Input: nums = [3, 0, 1]
 * Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const expectedSum = nums.length * (nums.length + 1) / 2;
  const actualSum = nums.reduce((res, num) => res + num, 0);

  return expectedSum - actualSum;
};
