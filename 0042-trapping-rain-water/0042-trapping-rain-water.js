/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    let left = 0;
    let right =  height.length -1;

    let leftMax = 0;
    let rightMax = 0;

    let water_trapped = 0

    while (left < right) {
        if(height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water_trapped += leftMax - height[left];
            }
            left++;
        } else {
            if(height[right] >= rightMax) {
                rightMax = height[right]
            } else {
                water_trapped += rightMax - height[right]
            }
            right--
        }

    }

    return water_trapped
    
};