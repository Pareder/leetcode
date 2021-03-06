/**
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a
 * specific target number.
 *
 * The function twoSum should return indices of the two numbers such that they add up to the target, where index1
 * must be less than index2.
 *
 * Note:
 *
 * 1. Your returned answers (both index1 and index2) are not zero-based.
 * 2. You may assume that each input would have exactly one solution and you may not use the same element twice.
 *
 * Input: numbers = [2, 7, 11, 15], target = 9
 * Output: [1, 2]
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    const sum = numbers[i] + numbers[j];
    if (sum === target) {
      return [i + 1, j + 1];
    }

    if (sum < target) {
      i++;
    }

    if (sum > target) {
      j--;
    }
  }

  return [];
};
