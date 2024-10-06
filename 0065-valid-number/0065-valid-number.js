/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return isNaN(+s) || s == 'Infinity'  || s === '-Infinity' || s == '+Infinity' ? false :true
};