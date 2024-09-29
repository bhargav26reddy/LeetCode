/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    stack = [];

    for (const bracket of s) {
        //  if we encounter a left bracket, push to that bracket to the stack
        if (bracket === '{' || bracket === '(' || bracket === '[') {
            stack.push(bracket);
        } 
        //  if we encounter a right bracket, stack.pop and compare with the matching bracket
        else if (bracket === '}'){
            if ( stack.length === 0 || stack.pop() !== '{' ) return 0;
        } else if (bracket === ')'){
            if ( stack.length === 0 || stack.pop() !== '(' ) return 0;
        } else if (bracket === ']'){
            if ( stack.length === 0 || stack.pop() !== '[' ) return 0;
        }        
    }
    // if brackets are left in the stack, the input string is not valid
    return stack.length ? false : true;
};