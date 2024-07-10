/**
 * @param {number[]} height
 * @return {number}
 */
const getMin = (value1, value2) => {
    return Math.min(value1, value2);
}


var maxArea = function(height) {
    let col1 = { value: height[0], index: 0 };
    let col2 = { value: height[height.length - 1], index: height.length - 1 };
    let output = getMin(col1.value, col2.value) * (col2.index - col1.index);
    let cursor1 = 0;
    let cursor2 = height.length - 1;
    
    while (cursor1 !== cursor2) {
        if (height[cursor1] > output) {
            col1 = { value: height[cursor1], index: cursor1 };
        }
        if (height[cursor2] > output) {
            col2 = { value: height[cursor2], index: cursor2 };
        }
        if (col2.value > col1.value) {
            cursor1++;
            
            if (height[cursor1] > col1.value) {
                const newOutput = (col2.index - cursor1) * getMin(height[cursor1], col2.value);
                output = newOutput > output ? newOutput : output;
                col1 = { value: height[cursor1], index: cursor1 };
            }
            
        } else {
            cursor2--;
            
            if (height[cursor2] > col2.value) {
                const newOutput = (cursor2 - col1.index) * getMin(height[cursor2], col1.value);
                output = newOutput > output ? newOutput : output;
                col2 = { value: height[cursor2], index: cursor2 };
            }
        }
    } 
    
    return output;
};