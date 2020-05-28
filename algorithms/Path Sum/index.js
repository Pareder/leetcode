/**
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
 *
 * Note: A leaf is a node with no children.
 *
 * Input: root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], sum = 22
 * Output: true
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
  if (!root) {
    return false;
  }

  sum -= root.val;

  if (!root.left && !root.right) {
    return sum === 0;
  }

  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};
