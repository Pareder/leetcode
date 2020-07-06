/**
 * Given an integer, write a function to determine if it is a power of two.
 *
 * Input: n = 16
 * Output: true
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
  return Number.isInteger(Math.log2(n));
};
