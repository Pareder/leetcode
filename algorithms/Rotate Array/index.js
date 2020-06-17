/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 *
 * Follow up:
 *
 * 1. Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
 * 2. Could you do it in-place with O(1) extra space?
 *
 * Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
 * Output: [5, 6, 7, 1, 2, 3, 4]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k));
};
