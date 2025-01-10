/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let result = []
    matrix.reverse()
    let length = matrix[0].length
    for (let k = 0; k < length; k++){
        let arr = []
        for (let i = 0; i < matrix.length; i++) {
            if(matrix[i]){
            arr.push(matrix[i].shift())
            }
        }
        result.push(arr)
    }
    matrix.splice(0,matrix.length,...result)
};