/**
 * Given two binary strings, return their sum (also a binary string).
 *
 * The input strings are both non-empty and contains only characters 1 or 0.
 *
 * Input: a = "11", b = "1"
 * Output: "100"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
	return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};
