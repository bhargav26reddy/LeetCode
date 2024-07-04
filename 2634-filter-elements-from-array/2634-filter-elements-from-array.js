/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let a=[]
    arr.forEach((ele,index)=>{
          if(fn(ele,index)){
            a.push(ele)
          }
    })
    return a 
    
};