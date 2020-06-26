/**
 * Reverse a singly linked list.
 *
 * Input: head = [1, 2, 3, 4, 5]
 * Output: [5, 4, 3, 2, 1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  let current = null;
  while (head) {
    const temp = head;
    head = head.next;
    temp.next = current;
    current = temp;
  }

  return current;
};
