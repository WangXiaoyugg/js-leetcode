/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  // 删除元素位于头部，需要一个哨兵节点
  // 删除元素位于中间
  let sentinel = new ListNode(null)
  sentinel.next = head;
  let cur = sentinel
  while(cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return sentinel.next; 
};