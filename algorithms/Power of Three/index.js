/**
 * Given an integer n, return true if it is a power of three. Otherwise, return false.
 *
 * An integer n is a power of three, if there exists an integer x such that n == 3x.
 *
 * Input: n = 27
 * Output: true
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
	return (Math.log(n) / Math.log(3)).toFixed(10) % 1 === 0
};
