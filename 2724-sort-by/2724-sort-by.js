/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    let temp =[]
    arr.sort((a,b)=>{
        return fn(a)-fn(b)
    })
    return arr
};