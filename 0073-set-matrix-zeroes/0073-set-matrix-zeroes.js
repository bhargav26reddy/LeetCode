/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (mat) {
    const rows = mat.length;
    const cols = mat[0].length;
    let fcol = false;
    let frow = false;

    // Check if there is a zero in the first column, set
    // fcol to true.
    for (let i = 0; i < rows; i++) {
        if (mat[i][0] === 0) {
            fcol = true;
            break;
        }
    }

    // Check if there is a zero in the first row, set frow
    // to true.
    for (let i = 0; i < cols; i++) {
        if (mat[0][i] === 0) {
            frow = true;
            break;
        }
    }

    // Check row elements (by ignoring the first row and
    // first column). If zero is found, set the
    // corresponding row's and column's first element to
    // zero.
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (mat[i][j] === 0) {
                mat[0][j] = mat[i][0] = 0;
            }
        }
    }

    // Check every row's first element starting from the
    // second row. Set the complete row to zero if zero is
    // found.
    for (let i = 1; i < rows; i++) {
        if (mat[i][0] === 0) {
            mat[i].fill(0);
        }
    }

    // Check every column's first element starting from
    // the second column. Set the complete column to zero
    // if zero is found.
    for (let j = 1; j < cols; j++) {
        if (mat[0][j] === 0) {
            for (let i = 1; i < rows; i++) {
                mat[i][j] = 0;
            }
        }
    }

    // If fcol is true, set the first column to zero.
    if (fcol) {
        for (let i = 0; i < rows; i++) {
            mat[i][0] = 0;
        }
    }

    // If frow is true, set the first row to zero.
    if (frow) {
        mat[0].fill(0);
    }

    return mat;
};