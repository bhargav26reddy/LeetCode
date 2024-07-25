/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const countMap = new Map();
    arr.forEach(element => countMap.set(element, (countMap.get(element) || 0) + 1));
    return Array.from(countMap.values()).every((value, _, arr) => arr.indexOf(value) === arr.lastIndexOf(value));
};
