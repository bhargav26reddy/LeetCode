/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack.includes(needle)) {
        const arraySplit = haystack.split(needle)
        return arraySplit[0].length
    }

    return -1
};