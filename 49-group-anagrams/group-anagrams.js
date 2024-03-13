/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hmap = new Map()
    for(let i = 0; i < strs.length; i++){
        sWord = strs[i].split('').sort().join('')
        if(hmap.has(sWord)){
            hmap.get(sWord).push(strs[i])
        } else {
            hmap.set(sWord, [strs[i]])
        }
    }
    return [...hmap.values()]
};