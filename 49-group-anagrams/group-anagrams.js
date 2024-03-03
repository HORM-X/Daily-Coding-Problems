/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    obj = {}
    for (let n of strs) {
        let key = n.split('').sort().join('')
        if (!obj[key]) {
            obj[key] = [n]
        } else{
            obj[key].push(n)
        }
    }
    console.log("obj", obj)
    return(Object.values(obj))
};