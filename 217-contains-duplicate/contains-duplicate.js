/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    numsmap = new Map()
    for (i = 0; i < nums.length; i++) {
        if (numsmap.has(nums[i])) {
            return true
        }
        numsmap.set(nums[i], true)
    }
    return false
};