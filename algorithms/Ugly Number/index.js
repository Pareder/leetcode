/**
 * Write a program to check whether a given number is an ugly number.
 *
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 *
 * Input: num = 6
 * Output: true
 */

/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = function(num) {
  if (num <= 0) {
    return false;
  }

  if (num <= 5) {
    return true;
  }

  if (num % 2 === 0) {
    return isUgly(num / 2);
  }

  if (num % 3 === 0) {
    return isUgly(num / 3);
  }

  if (num % 5 === 0) {
    return isUgly(num / 5);
  }

  return false;
};
