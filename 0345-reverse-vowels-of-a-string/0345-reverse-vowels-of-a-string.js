/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let array_vowels = []
    let result = "";
    for (let x=0;x<s.length;x++) {
        if (s.charAt(x) == 'a' || s.charAt(x) == 'i' || s.charAt(x) == 'u' || s.charAt(x) == 'e' || s.charAt(x) == 'o' || s.charAt(x) == 'A' || s.charAt(x) == 'I' || s.charAt(x) == 'U' || s.charAt(x) == 'E' || s.charAt(x) == 'O') {
            array_vowels.push(s.charAt(x));
        }
    }
    for (let x=0;x<s.length;x++) {
        if (s.charAt(x) != 'a' && s.charAt(x) != 'i' && s.charAt(x) != 'u' && s.charAt(x) != 'e' && s.charAt(x) != 'o' && s.charAt(x) != 'A' && s.charAt(x) != 'I' && s.charAt(x) != 'U' && s.charAt(x) != 'E' && s.charAt(x) != 'O') result += s.charAt(x);
        else result += array_vowels.pop();
    }
    return result;
}