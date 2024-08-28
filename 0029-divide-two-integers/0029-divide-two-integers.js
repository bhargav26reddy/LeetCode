/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var ans = parseInt(dividend/divisor);
    if (ans < -2147483648) return -2147483648;
	if (ans > 2147483647) return 2147483647;
    return(ans);
};