/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length === 0) {
        return false
    }
    let left = 0;
    let right = matrix.length - 1;
    let row = -1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (target >= matrix[middle][0] && target <= matrix[middle][matrix[middle].length - 1]) {
            row = middle;
            break
        }
        if (matrix[middle][0] > target) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    if (row === -1) {
        return false
    };
    let rightindex = matrix[row].length - 1;
    let leftindex = 0;
    while (leftindex <= rightindex) {
        let middleindex = Math.floor((rightindex + leftindex) / 2)
        if (target === matrix[row][middleindex]) {
            return true
        }
        if (target < matrix[row][middleindex]) {
            rightindex = middleindex - 1
        }
        else {
            leftindex = middleindex + 1
        }
    }
    return false
};