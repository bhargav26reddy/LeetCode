/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = (word1, word2) => {
    const freq1 = Array(26).fill(0);
    const freq2 = Array(26).fill(0);

    for (const letter of word1) {
        freq1[letter.charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (const letter of word2) {
        freq2[letter.charCodeAt() - 'a'.charCodeAt()]++;
    }

    for (let i = 0; i < freq1.length; i++) {
        if (!freq1[i] && !!freq2[i]) return false;
        if (!!freq1[i] && !freq2[i]) return false;
    }

    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);

    for (let i = 0; i < freq1.length; i++) {
        if (freq1[i] !== freq2[i]) return false;
    }
    
    return true;
};