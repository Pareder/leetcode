/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 *
 * Note: For the purpose of this problem, we define empty string as valid palindrome.
 *
 * Input: s = 'A man, a plan, a canal: Panama'
 * Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  s = s.replace(/\W/g, '').toLowerCase();
  for (let i = 0, j = s.length - 1; i < s.length / 2, j >= s.length / 2; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }

  return true;
};
