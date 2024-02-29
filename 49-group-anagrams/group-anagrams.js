/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let hmap = {}
    for (let str of strs) {
        let sortKey = str.split('').sort().join('');
            (!hmap[sortKey]) ? hmap[sortKey] = [str] : hmap[sortKey].push(str);
    }
    return Object.values(hmap);
};