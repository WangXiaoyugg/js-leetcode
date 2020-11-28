// leetcode 144 二叉树的前序遍历

// 递归写法
const preorderTraversal = (root, arr=[]) =>  {
  if(root) {
    arr.push(root.val)
    preorderTraversal(root.left)
    preorderTraversal(root.right)
  }
  return arr;
}

// 迭代方法
const preorderTraversal1 = (root) =>  {
  // 开始遍历，用stack存储
  // left入栈，直到left为空
  // 节点出栈，右孩子为目标节点
  let result = [];
  let stack = [];
  let cur = root;

  while(cur || stack.length > 0) {
    while(cur) {
      result.push(cur.val)
      stack.push(cur)
      cur = cur.left;
    }
    cur = stack.pop()
    cur = cur.right
  }
  return result
}