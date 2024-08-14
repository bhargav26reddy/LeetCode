/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sumRange = 0 
    let sumVals = 0 
    for( let i=0 ; i<  nums.length; i++ ){
     sumRange += i 
sumVals += nums[i]
    }

    return nums.length + sumRange  -  sumVals
};