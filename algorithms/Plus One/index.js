/**
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 * Input: digits = [1, 2, 3]
 * Output: [1, 2, 4]
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
	for (let i = digits.length - 1; i >= 0; i--) {
		const newValue = digits[i] + 1;
		if (newValue < 10) {
			digits[i] = newValue;
			return digits;
		}

		digits[i] = 0;
	}

	return [1, ...digits];
};
