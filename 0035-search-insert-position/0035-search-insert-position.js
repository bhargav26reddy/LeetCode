/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
   let index = nums.indexOf(target)
   if(index == -1){
      let grein = nums.findIndex((a)=> a > target)
    
       if(grein == -1){
           return nums.length
       }else{
           return grein
       }
   }else{
       return index
   }
   
    
};