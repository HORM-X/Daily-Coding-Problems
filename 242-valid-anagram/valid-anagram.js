/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false

    let map = {}

    for (c of s) {
        map[c] = (map[c] || 0) + 1
    }

    for (c of t) {
        if (!map[c] || map[c] == 0) return false
        map[c]--
    }
    return true
};