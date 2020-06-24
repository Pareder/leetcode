/**
 * Count the number of prime numbers less than a non-negative number, n.
 *
 * Input: n = 10
 * Output: 4
 */

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
  const primes = new Array(n).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (!primes[i]) {
      continue;
    }

    for (let j = i * i; j < n; j += i) {
      primes[j] = false;
    }
  }

  return primes.filter(val => val).length;
};
