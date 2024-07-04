/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let a = arr.map((ele, index)=>{
         return fn(ele, index)
    })
    return a
};