/**
 * Given an integer n, return the number of trailing zeroes in n!.
 *
 * Input: n = 5
 * Output: 1
 */

/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function(n) {
  if (n === 0) {
    return 0;
  }

  n /= 5

  return ~~n + trailingZeroes(~~n);
};
