/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}
    
    for(let n of nums){
        if(!map[n]){
            map[n] = 0
        }
        map[n]++
        }
        return arr = [...Object.keys(map)].sort((a,b) => map[b] - map[a]).slice(0,k)
};