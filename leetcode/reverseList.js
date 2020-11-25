/**
 输入: 1->2->3->4->5->NULL
 1 <- 2 <- 3 <- 4 <- 5
 输出: 5->4->3->2->1->NULL
 */
var reverseList = function(head) {
  let cur = head;
  let prev = null;
  while(cur != null) {
    // 解构
    // [cur.next, prev, cur] = [prev, cur, cur.next]

    // 非解构
    let next = cur.next; 
    //完成一次翻转
    cur.next = prev; 
    //继续下一个节点的翻转
    prev = cur;    
    cur = next;
  }
  return prev;
};