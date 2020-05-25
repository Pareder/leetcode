/**
 * You are climbing a stair case. It takes n steps to reach to the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Input: n = 2
 * Output: 2
 */

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
	if (n < 3) {
		return n;
	}

	let first = 1;
	let second = 2;

	for (let i = 3; i <= n; i++) {
		const third = first + second;
		first = second;
		second = third;
	}

	return second;
};
