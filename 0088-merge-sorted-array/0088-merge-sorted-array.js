/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let sortedArr = [...nums1.slice(0,m).concat(nums2.slice(0,n)).sort((a,b)=> a-b)]  
  // Step 2: Copy sorted values back into nums1
  for (let i = 0; i < sortedArr.length; i++) {
    nums1[i] = sortedArr[i];
  }
};