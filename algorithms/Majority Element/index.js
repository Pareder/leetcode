/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than
 * ⌊n / 2⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 * Input: nums = [3, 2, 3]
 * Output: 3
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  let count = 0;
  let result;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      result = nums[i];
    }

    count += nums[i] === result ? 1 : -1;
  }

  return result;
};
