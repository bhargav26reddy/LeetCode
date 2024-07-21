/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = 0;
    let leftIndex = 0;
    for(let i=0;i<nums.length;i++){
        totalSum = totalSum + nums[i];
    }
    for(let j=0;j<nums.length;j++){
        if(totalSum - leftIndex - nums[j] === leftIndex){
           return j; 
        }
        leftIndex = leftIndex + nums[j];
    }
    return -1;
};