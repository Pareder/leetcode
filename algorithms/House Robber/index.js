/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money
 * stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system
 * connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount
 * of money you can rob tonight without alerting the police.
 *
 * Input: nums = [1, 2, 3, 1]
 * Output: 4
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  if (nums.length < 2) {
    return nums[0] || 0;
  }

  if (nums.length === 2) {
    return Math.max(...nums);
  }

  let sums = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    sums[i] = Math.max(nums[i] + sums[i - 2], sums[i - 1]);
  }

  return sums[sums.length - 1];
};
