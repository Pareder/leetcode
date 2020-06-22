/**
 * Write an algorithm to determine if a number n is "happy".
 *
 * A happy number is a number defined by the following process: Starting with any positive integer, replace the number
 * by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or
 * it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy
 * numbers.
 *
 * Return True if n is a happy number, and False if not.
 *
 * Input: n = 19
 * Output: true
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
  const set = new Set();
  let sum = sumOfDigits(n);
  while (!set.has(sum)) {
    if (sum === 1) {
      return true;
    }

    set.add(sum);
    sum = sumOfDigits(sum);
  }

  return false;
};

const sumOfDigits = function(num) {
  let sum = 0;
  while (num > 0) {
    sum += Math.pow((num % 10), 2);
    num = Math.floor(num / 10);
  }

  return sum;
};
