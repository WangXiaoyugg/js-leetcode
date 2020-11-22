// 两数之和
/**
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 
*/
const  nums = [2, 7, 11, 15], target = 9;

// 1. 暴力求解
const twoSum = (nums, target) => {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] ===  target) {
        return [i, j]
      }
    }
  }
}

console.log(twoSum(nums, target));// [0, 1]

// 2. 空间换时间
const twoSum1 = (nums, target ) => {
  let obj = {}
  for(let i = 0; i < nums.length; i++) {
    let n1 = nums[i]  // 2
    let n2 = target - n1; // 7
    if (obj[n1] || obj[n1] === 0) {
      return [obj[n1], i]
    } else {
      obj[n2] = i;
    } 
  }
}

console.log(twoSum1(nums, target));