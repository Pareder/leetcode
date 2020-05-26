/**
 * Given two binary trees, write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
 *
 * Input: p = [1, 2, 3], q = [1, 2, 3]
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return p.val === q.val
    && isSameTree(p.left, q.left)
    && isSameTree(p.right, q.right);
};
