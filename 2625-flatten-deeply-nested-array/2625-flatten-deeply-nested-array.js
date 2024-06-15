/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n==0) return arr;
    let temp=[]
  function trans(arr,n){
    arr.forEach((ele)=>{
        if(n>0 && Array.isArray(ele)){
             trans(ele, n-1)
        }else{
            temp.push(ele)
        }
    })
  }
  trans(arr,n)
    return temp
    
};