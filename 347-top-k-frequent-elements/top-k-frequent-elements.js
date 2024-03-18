/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hmap = new Map()
    for (let n of nums){
        hmap[n] = (hmap[n] || 0) + 1
    }
    return Object.keys(hmap).sort((a,b) => hmap[b] - hmap[a]).slice(0,k)
};