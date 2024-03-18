/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}
    for(let n of nums){
        map[n] = (map[n] || 0) + 1
    }
    return Object.keys(map).sort((a,b) => (map[b] - map[a])).slice(0,k)
};