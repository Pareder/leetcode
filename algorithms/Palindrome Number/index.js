/**
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 *
 * Input: x = 121
 * Output: true
 */

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
	if (x < 0) {
		return false;
	}

	const arrayOfX = [];
	while (x > 0) {
		arrayOfX.push(x % 10);
		x = Math.floor(x / 10);
	}

	for (let i = 0, j = arrayOfX.length - 1; i < arrayOfX.length / 2, j >= arrayOfX.length / 2; i++, j--) {
		if (arrayOfX[i] !== arrayOfX[j]) {
			return false;
		}
	}

	return true;
};
