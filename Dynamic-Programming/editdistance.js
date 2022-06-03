var s1 = ['s','u','n','d','a','y'];
var s2 = ['s','a','t','u','r','d','a','y'];
var m = s1.length;
var n = s2.length;
//given three operation 1.insert 2.delete 3.replace
//calculate minimum no of operations required to convert s1 to s2;

// //recursive approach
// function editDistance(s1, s2, m, n){
//     if(m == 0){
//         return n;
//     }
//     if(n==0){
//         return m;
//     }

//     if(s1[m-1] == s2[n-1]){
//         return editDistance(s1, s2, m-1, n-1);
//     }

//     return 1 + Math.min(editDistance(s1, s2, m-1, n), editDistance(s1, s2, m, n-1), editDistance(s1, s2, m-1, n-1));
// }

// console.log(editDistance(s1, s2, m, n));

//top-down approach
// var x = new Array(n+1).fill(-1);
// var dp = new Array(m+1).fill(x);

// function editDistance(s1, s2, m, n, dp){
//     if(m == 0){
//         return n;
//     }
//     if(n==0){
//         return m;
//     }
//     if(dp[m][n] != -1){
//         return dp[m][n];
//     }
//     if(s1[m-1] == s2[n-1]){
//         return dp[m][n] = editDistance(s1, s2, m-1, n-1, dp);
//     }

//     return dp[m][n] = 1+ Math.min(editDistance(s1, s2, m-1, n, dp), editDistance(s1, s2, m, n-1, dp), editDistance(s1, s2, m-1, n-1, dp));
// }

// console.log(editDistance(s1, s2, m, n, dp));

//bottom-up approach
function editDistance(s1, s2, m, n){
    var x = new Array(n+1).fill(-1);
    var dp = new Array(m+1).fill(x);
    
    for(let i = 0; i <= m; i++){
       for(let j = 0; j <= n; j++){
           if(i == 0){
               dp[i][j] = j;
           }else if(j == 0){
               dp[i][j] = i;
           }else if(s1[i-1] == s2[j-1]){
               dp[i][j] = dp[i-1][j-1];
           }else{
               dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
           }
       }
    }
    return dp[m][n];
}

console.log(editDistance(s1, s2, m, n));
