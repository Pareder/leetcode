/**
 * Say you have an array prices for which the ith element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like
 * (i.e., buy one and sell one share of the stock multiple times).
 *
 * Note: You may not engage in multiple transactions at the same time
 * (i.e., you must sell the stock before you buy again).
 *
 * Input: prices = [7, 1, 5, 3, 6, 4]
 * Output: 7
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let profit = 0;
  prices.reduce((acc, next) => {
    if (next > acc) {
      profit += next - acc;
    }

    return next;
  });

  return profit;
};
