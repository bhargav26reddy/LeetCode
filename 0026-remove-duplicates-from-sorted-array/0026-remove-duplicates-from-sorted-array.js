/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(n) {
    
    let j = 0;
    
    for(let i = 0; i < n.length; i++) {
        
        if(n[i] !== n[i+1]) {    
            n[j++] = n[i];
        }
    };
    
    return j;
};