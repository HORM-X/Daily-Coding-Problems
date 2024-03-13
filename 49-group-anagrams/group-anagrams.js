/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hmap = {}
    for(let n of strs){
        let arr = new Array(26).fill(0)
        for(let c of n){
            arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }

        let key = ''
        for(let i = 0; i < arr.length; i++){
            key += '#' + arr[i]
        }

        let arr2 = []
        if(hmap[key]) arr2 = hmap[key]
        arr2.push(n)
        hmap[key] = arr2

    }
    return Object.values(hmap)
};