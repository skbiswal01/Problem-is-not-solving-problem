
var s1 = ['a','b','c','d'];
var s2 = ['p','q','c','d','f'];
var m = s1.length;
var n = s2.length;
//only 2 operations in this question 1. insert 2. delete;
//recursive approach
function editDistance(s1, s2, m, n){
        if(m == 0){
            return n;
        }
        if(n==0){
            return m;
        }
    
        if(s1[m-1] == s2[n-1]){
            return editDistance(s1, s2, m-1, n-1);
        }
    
        return 1 + Math.min(editDistance(s1, s2, m-1, n), editDistance(s1, s2, m, n-1));
    }
    
    console.log(editDistance(s1, s2, m, n));

    //second approach
    //using LCS
    //for no of insertion length(s1) - length(LCS(s1, s2));
    //for no of deletion length(s2) - length(LCS(s1, s2));