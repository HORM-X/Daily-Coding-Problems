/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    hmap = new Map()
    for (let i = 0; i < nums.length; i++){
        let n1 = nums[i]
        let n2 = target - n1
        if(hmap.has(n2)){
            return  [i, hmap.get(n2)]
        }
        hmap.set(n1, i)
    }
};