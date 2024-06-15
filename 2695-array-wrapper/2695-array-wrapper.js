/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.temp = nums
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    // console.log(this.temp)
   return [...this.temp].reduce((a,e)=>{
        return  a+e
        },0)
   
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return JSON.stringify(this.temp)
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */