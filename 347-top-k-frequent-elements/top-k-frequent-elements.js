/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hmap = new Map();
    for (let key of nums) {
        hmap.set(key, (hmap.get(key) || 0) + 1);
    }
    let sortedEntries = Array.from(hmap.entries()).sort((a, b) => b[1] - a[1]);
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(sortedEntries[i][0]);
    }
    return result;
};