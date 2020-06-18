/**
 * Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as
 * the Hamming weight).
 *
 * Input: n = 00000000000000000000000000001011
 * Output: 3
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {
  let result = 0;
  while (n !== 0) {
    result += n & 1;
    n >>>= 1;
  }

  return result;
};
