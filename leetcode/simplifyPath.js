// 简化路径
/**
 输入："/home/"
 输出："/home"
 解释：注意，最后一个目录名后面没有斜杠。
 
 输入："/../"
 输出："/"
 解释：从根目录向上一级是不可行的，因为根是你可以到达的最高级

 输入："/home//foo/"
 输出："/home/foo"
 解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。

 输入："/a/./b/../../c/"
 输出："/c"

 输入："/a/../../b/../c//.//"
 输出："/c"

 输入："/a//b////c/d//././/.."
 输出："/a/b/c"

 */

var simplifyPath = function(path) {
  let stack = []
  let pathArray = path.split('/').filter(item => item !== '');
  
  for (let i = 0; i <pathArray.length; i++) {
    let item = pathArray[i]
    if (item === '.') {
      continue
    } else if (item === '..') {
      stack.pop()
    } else {
      stack.push(item)
    }
  }

  return '/' + stack.join('/');
}

var simplifyPath1 = function(path) {
  let stack = []
  let paths= path.split('/');
  
  for (let i = 0; i <paths.length; i++) {
    let p = pathArray[i]
    if (p === '..') {
      stack.pop()
    } else if (p && p !== '.') {
      stack.push(p)
    }
  }

  return '/' + stack.join('/');
}
console.log(simplifyPath("/home/"))
console.log(simplifyPath("/../"))
console.log(simplifyPath("/home//foo/"))
console.log(simplifyPath("/a/./b/../../c/"))
console.log(simplifyPath("/a/../../b/../c//.//"))
console.log(simplifyPath("/a//b////c/d//././/.."))
console.log(simplifyPath("/."))
console.log(simplifyPath("/home/../../.."))