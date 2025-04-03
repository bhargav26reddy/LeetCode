/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let sorted = nums.filter((a)=> a!=val)
    // Copy elements from sorted back into nums
    for (let i in sorted) {
        nums[i] = sorted[i];
    }
    
    nums.length = sorted.length; // Resize nums
    return nums.length; // Return new length
    
};