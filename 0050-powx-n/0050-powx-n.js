/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const binaryPow = (num, power) => {
    if (num === 0) return 0;
    if (power === 0) return 1;
    
    let result = 1;
    let base = num;
    
    while (power > 0) {
        if (power % 2 === 1) {
            result *= base;
        }
        base *= base;
        power = Math.floor(power / 2);
    }
    
    return result;
}

const myPow = (x, n) => {
    const res = binaryPow(x, Math.abs(n));
    
    return n < 0 ? 1/res : res;
};