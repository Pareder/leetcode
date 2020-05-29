/**
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 *
 * Input: numRows = 5
 * Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  if (numRows === 0) {
    return [];
  }

  const result = [[1]];
  for (let i = 1; i < numRows; i++) {
    result[i] = [1];
    for (let j = 1; j < i; j++) {
      result[i].push(result[i - 1][j - 1] + result[i - 1][j])
    }

    result[i].push(1);
  }

  return result;
};
