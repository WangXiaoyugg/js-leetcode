const invertTree = function(root) {
  // 递归终止条件
  if (root == null) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root
}