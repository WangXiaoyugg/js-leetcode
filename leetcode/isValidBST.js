/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 二插搜索树，节点的值大于left的值，小于right的值

 // 使用递归
 // helper 来递归判断
 // root 为根的子树,子树中的所有节点的值都在（l,r)之内
 // 如果root.val不在(l,r) 范围内不满足条件之直接返回
// 否则继续递归调用检查左右子树是否满足条件，都满足才才说明是一颗二插搜索树
// 注意，递归调用时，入口为helper(root, -Infinity, Infinity)
// 递归调左子树， 上界upper改为root.val, 即helper(root.left, lower, root.val)
// 递归调用右子树，把下界lower改为root.val, 即helper(root.right, lower, upper)
var helper = (root, lower, upper) =>  {
  if (root === null) {
    return true
  }

  if (root.val <= lower || root.val >= upper) {
    return false;
  }

  return helper(root.left, lower, root.val) 
    && helper(root.right, root.val, upper);
}
var isValidBST = function(root) {
  // 中序遍历自增
  return helper(root, -Infinity, Infinity)
};

// 中序遍历
var isValidBST1 = function (root) {
  // 中序遍历，升序。
  // 中序遍历的实时检查当前节点的值是否大于前一个中序遍历的节点的值即可
  // 如果均大于说明这个序列升序。则说明整棵树是二叉搜索树
  let stack = []
  let inorder = -Infinity;

  while(stack.length || root !== null) {
    while(root !== null) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    // 中序遍历得到的节点的值小于等于前一个的inorder, 说明不是二叉搜索树
    if (root.val <= inorder) {
      return false;
    } 
    inorder = root.val
    root = root.right
  }
  return true;
}