/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
 * design an algorithm to find the maximum profit.
 *
 * Note that you cannot sell a stock before you buy one.
 *
 * Input: prices = [7, 1, 5, 3, 6, 4]
 * Output: 5
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let lowestPrice = prices[0];
  return prices.reduce((acc, curr) => {
    if (curr < lowestPrice) {
      lowestPrice = curr;
    } else if (curr - lowestPrice > acc) {
      return curr - lowestPrice;
    }

    return acc;
  }, 0);
};
