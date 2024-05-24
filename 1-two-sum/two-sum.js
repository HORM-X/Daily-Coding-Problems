/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    map = {}
    for(let i=0; i < nums.length; i++){
        const num = nums[i];
        if(target - num in map){
            return [i, map[target - num]]
        }
        map[num] = i;
    } 
};