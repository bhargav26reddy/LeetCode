/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length == 0) return []; // if length of digits is 0 then return empty array

    const map = { // initialize map object for every digits from 2 to 9 and assign telephone number letters as value in the form of an array
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }

    const iterate = (nums) => { // initialize iterate function which has nums as parameter
        let arr = []; // initialize an empty array
        if (nums.length == 1) return map[nums]; // if length of digits is 1 then return value of map as per key nums
        let first = nums.slice(0, 1); // take first digit from nums using slice
        console.log(first,'first')
        let others = iterate(nums.slice(1)); // take others digits from nums using slice and add as argument in iterate function
 console.log(others,'others')
        for (let digit of map[first]) { // loop through the first value in map
            console.log('yo')
            for (let pairDigit of others) { // loop through the others value
                console.log(digit, pairDigit,digit + pairDigit)
                arr.push(digit + pairDigit); // add digit and pairDigit and push in array arr
            }
        }
        return arr; // return arr
    }

    return iterate(digits) // return the iterate function value and pass digits as argument

};