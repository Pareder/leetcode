/**
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 *
 * Input: s = "anagram", t = "nagaram",
 * Output: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const words = {};
  for (let i = 0; i < s.length; i++) {
    words[s[i]] = (words[s[i]] || 0) + 1;
    words[t[i]] = (words[t[i]] || 0) - 1;
  }

  return Object.values(words).every(count => count === 0);
};
