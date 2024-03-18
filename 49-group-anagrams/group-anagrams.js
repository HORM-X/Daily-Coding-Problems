/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    for(let n of strs){
        let key = n.split('').sort().join('')
        if(!map[key]){
            map[key] = []
        }
        map[key].push(n)
    }
    return Object.values(map)
};