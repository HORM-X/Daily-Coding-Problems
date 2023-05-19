/* 
Good morning! Here's your coding interview problem for today.
This problem was recently asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
Bonus: Can you do this in one pass?
*/

var twoSum = function (nums, taget) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = taget - nums[i];
    if (complement in obj) return [obj[complement], i];
    obj[nums[i]] = i;
  }
  return [];
};

console.log(twoSum([10, 15, 3, 7], 17));

/*  Time complexity:  O(n) 
    Space complexity: O(n)
    
    It allows us to find the two numbers that sum up to the target in a single pass through the array.    
    
*/
