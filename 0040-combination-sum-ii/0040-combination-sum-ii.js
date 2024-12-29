/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const results = [];
    candidates.sort((a, b) => a - b);
    
    function backtrack(remain, start, combination) {
        if (remain === 0) {
            results.push([...combination]);
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i-1]) continue; // Skip duplicates
            if (candidates[i] > remain) break; // Pruning
            
            combination.push(candidates[i]);
            backtrack(remain - candidates[i], i + 1, combination);
            combination.pop();
        }
    }
    
    backtrack(target, 0, []);
    return results;
};