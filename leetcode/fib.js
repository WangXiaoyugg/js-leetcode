// 斐波那契数列
/**
 F(0) = 0,   F(1) = 1
 F(N) = F(N - 1) + F(N - 2), 其中 N > 1.

输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1.

输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2.

*/

// 递归
const fib = (n) =>  {
  if (n === 0) return 0
  if (n === 1) return 1
  return fib(n - 1) + fib(n-2)
}
console.log(fib(2))
console.log(fib(3))

//  递推
const fib1 = (n) =>  {
  if (n === 0) return 0
  if (n === 1) return 1
  let n1 = 0;
  let n2 = 1;
  for (let i = 1; i < n; i++) {
    let temp = n2;
    n2 = n1 + n2;
    n1 = temp; 
  }
  return n2;
}

console.log(fib1(2))
console.log(fib1(3))
console.log(fib1(4))
