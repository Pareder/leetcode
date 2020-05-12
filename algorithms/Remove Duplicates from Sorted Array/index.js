/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return
 * the new length.
 *
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1)
 * extra memory.
 *
 * Input: nums = [1,1,2]
 * Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
	if (!nums.length) {
		return 0;
	}

	let length = nums.length;
	for (let i = 1; i < length; i++) {
		if (nums[i] !== nums[i - 1]) {
			nums.push(nums[i]);
		}
	}

	nums.splice(1, length - 1);

	return nums.length;
};
