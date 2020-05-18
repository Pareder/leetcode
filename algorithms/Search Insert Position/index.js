/**
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where
 * it would be if it were inserted in order.
 *
 * You may assume no duplicates in the array.
 *
 * Input: nums = [1, 3, 5, 6], target = 5
 * Output: 2
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
	let start = 0;
	let end = nums.length - 1;
	while (true) {
		if (start > end) {
			return start;
		}

		let middle = Math.floor((start + end) / 2);
		if (nums[middle] === target) {
			return middle;
		}

		if (nums[middle] < target) {
			start = middle + 1;
		}

		if (nums[middle] > target) {
			end = middle - 1;
		}
	}
};
