/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let start = 0;
    let ans = 0, count = 0;

    for(let  i = 0; i < nums.length; i++){
        if(!nums[i]) count++;

        if(count > k){
            if(!nums[start]) count--;
            start++;
        }
        ans = Math.max(ans,i-start+1);
    }
    return ans;
};