/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if(s.length != t.length) return false
    let hmap = {}
    for (let n of s) {
        hmap[n] = (hmap[n] || 0) + 1
    }
    for (let n of t) {
        if (!hmap[n] || hmap[n] === 0) {
            return false
        }
        hmap[n]--
    }
    return true
};