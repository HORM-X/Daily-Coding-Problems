/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    numset = new Set()
    for (i = 0; i < nums.length; i++) {
        if (numset.has(nums[i])) {
            return true
        }
        numset.add(nums[i])
    }
    return false

};