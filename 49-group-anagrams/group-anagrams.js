/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let obj = {}
    for (let n of strs) {
        let key = n.split('').sort().join('')
        if (!obj[key]) {
            obj[key] = [n]
        } else {
            obj[key].push(n)
        }
    }
    return Object.values(obj)
};