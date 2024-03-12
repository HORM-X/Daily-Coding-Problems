/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let objmap = {}

    for (let s of strs) {
        let arr = new Array(26).fill(0)
        for (let c of s) {
            arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }

        let key = ''
        for (let i = 0; i < arr.length; i++) {
            key += '#' + arr[i]
        }

        let arr2 = []
        if(objmap[key]) arr2 = objmap[key]
        arr2.push(s)
        objmap[key] = arr2
    }
    return Object.values(objmap)
};