let s = "leetcode", wordDict = ["leet","code"];
// let s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
var wordBreak = function(s, wordDict, memo={}) {
    if(s in memo) return memo[s];

    if(s.length===0) return true;
    
    for(const word of wordDict) {
        if(s.indexOf(word)===0) {
            
            const suffix = s.slice(word.length);
            //console.log(suffix)
            if(wordBreak(suffix, wordDict, memo)) {
                memo[suffix]= true; 
                return true;
            }
        }  
    }
    memo[s] = false;
    return false;
};

console.log(wordBreak(s, wordDict));