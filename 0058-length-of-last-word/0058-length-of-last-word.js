/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    validWordReached = false;
    for(let i = s.length-1; i>=0; i--){
        if ((s[i] == " ") && (validWordReached == true)){ 
            return(s.length - (i+1)); 
        } else if ((s[i] == " ") && (validWordReached == false)) { 
           s = s.slice(0, -1); 
        } else {
            validWordReached = true; 
        }
    } 
    return(s.length); 
};