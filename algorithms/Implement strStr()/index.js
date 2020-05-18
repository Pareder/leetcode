/**
 * Implement strStr().
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
	if (!needle.length) {
		return 0;
	}

	let j = 0;
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === needle[j]) {
			if (j === needle.length - 1) {
				return i - j;
			}

			j++;
		} else {
			i -= j;
			j = 0;
		}
	}

	return -1;
};
