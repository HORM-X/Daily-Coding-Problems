/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hmap = new Map()
    for(let i=0; i < nums.length; i++){
        let num1 = nums[i]
        let num2 = target - num1
        if(hmap.has(num2)){
            return [i, hmap.get(num2)]
        }
        hmap.set(num1, i)
    } 
};