/**
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character but a character may map to itself.
 *
 * Input: s = "egg", t = "add"
 * Output: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const objS = {};
  const set = new Set();
  for (let i = 0; i< s.length; i++) {
    const val = objS[s[i]];
    if (!val) {
      if (set.has(t[i])) {
        return false;
      }

      objS[s[i]] = t[i];
      set.add(t[i]);
      continue;
    }

    if (val !== t[i]) {
      return false;
    }
  }

  return true;
};
