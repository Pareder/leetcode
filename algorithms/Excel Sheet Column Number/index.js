/**
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 *
 * Input: s = "ZY"
 * Output: 701
 */

/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function(s) {
  let result = 0;
  let multiplier = 1;
  for (let i = s.length - 1; i >= 0; i--) {
    result += multiplier * (s.charCodeAt(i) - 64);
    multiplier *= 26;
  }

  return result;
};
