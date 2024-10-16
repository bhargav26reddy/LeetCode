/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    return findSubArray(nums);
};
function findSubArray(arr, startIndex = 0, currentSubarray = []) {
    if (startIndex === arr.length) {
        return [currentSubarray];
    }
    const withElement = findSubArray(arr, startIndex + 1, [...currentSubarray, arr[startIndex]]); // Include element
    const withoutElement = findSubArray(arr, startIndex + 1, currentSubarray); // Exclude element
    return withElement.concat(withoutElement); // Combine results
}