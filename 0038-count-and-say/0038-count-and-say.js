/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) { 
    if(n==1) return '1';
    let str = '1';
    for(let i=1; i<n; i++) str = createContainers(str);
     
    return str; 
};

function createContainers(str) {
    let arr = [], ch = '';
    for(let i=0; i<str.length; i++) {
        if(str[i] == str[i+1]) ch += str[i];
        else {
            ch += str[i];
            arr.push(ch);
            ch = '';
        }
    }
    return say(arr);
}
function say(numStrArr) {
    let str = ''
    for(let i in numStrArr) str += numStrArr[i].length + numStrArr[i][0];
    
    return str;
}

var countAndSay = function(n) {
    if(n==1) return '1';
    let str = '1';
    for(let i=1; i<n; i++) str = createContainers(str); 
    return str; 
};

function createContainers(str) {
    let frequency = 1, string = '';
    for(let i=0; i<str.length; i++) {
        if(str[i] != str[i+1]) {
            string += frequency + str[i];
            frequency = 1;
        } else frequency++;
    }
    return string;
}