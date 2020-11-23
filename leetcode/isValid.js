// 20. 有效的括号
/**
 输入: "()"
 输出: true
 输入: "()[]{}"
 输出: true
 输入: "(]"
 输出: false
 输入: "([)]"
 输出: false
 输入: "{[]}"
 输出: true
 */

const isValid = (s) => {
  let stack = []
  for(let i = 0; i < s.length; i++) {
    let n = s[i]
    if (n === '{' || n === '(' || n === '[') {
      stack.push(n);
    } else{
      let m = stack.pop()
      if (!((m === '(' && n === ')') || 
          (m === '{' && n === '}') ||
          (m === '[' && n === ']'))  
      ) {
        return false;
      }
    }   
  }
  return stack.length === 0;  

}