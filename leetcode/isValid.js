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

// 使用对象存储
const isValid1 = (s) =>  {
  let stack = []
  let obj = {'(':')', '{':'}', '[': ']'}
  for (let i= 0; i < s.length; i++) {
    const el = s[i]
    if (el in obj) {
      stack.push(el)
    } else {
      if (el !== obj[stack.pop()]) {
        return false;
      }
    }
  }
  return !stack.length;
}