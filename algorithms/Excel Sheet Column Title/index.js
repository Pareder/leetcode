/**
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 *
 * Input: n = 701
 * Output: "ZY"
 */

/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = function(n) {
  let result = '';
  while (n > 0) {
    const modulus = (n % 26) || 26;
    result = String.fromCharCode(modulus + 64) + result;
    n -= modulus;
    n /= 26;
  }

  return result;
};
