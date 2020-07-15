/**
 * Given a pattern and a string str, find if str follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in
 * str.
 *
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function(pattern, str) {
  const strArr = str.split(' ');
  if (pattern.length !== strArr.length) {
    return false;
  }

  const mapP = new Map();
  const mapS = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (mapP.has(pattern[i]) || mapS.has(strArr[i])) {
      if (mapP.get(pattern[i]) === mapS.get(strArr[i])) {
        continue;
      }

      return false;
    }

    mapP.set(pattern[i], i);
    mapS.set(strArr[i], i);
  }

  return true;
};
