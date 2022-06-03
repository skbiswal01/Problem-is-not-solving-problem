var x = ['a','b','c','d','e','x','y','z'];
var y = ['x','y','z','a','b','c','d','e'];
var m = x.length;
var n = y.length;

// function sub(x, y, m, n){
//    if(m==0 || n==0){
//        return 0;
//    }
//    if(x[m-1] == y[n-1]){
//        return 1 + sub(x, y, m-1, n-1)
//    }
//    return Math.max(sub(x, y, m, n-1), sub(x, y, m-1, n))
// }
// console.log(sub(x, y, m, n));


//top-down method
// var l = new Array(n+1).fill(-1);
// var dp = new Array(m+1).fill(l);

// function lcs(X, Y, m, n, dp){
    
//         if (m == 0 || n == 0)
//         return 0;
//     if (X[m - 1] == Y[n - 1])
//         return dp[m][n] = 1 + lcs(X, Y, m - 1, n - 1, dp);
 
//     if (dp[m][n] != -1) {
//         return dp[m][n];
//     }
//     return dp[m][n] = Math.max(lcs(X, Y, m, n - 1, dp),
//                           lcs(X, Y, m - 1, n, dp));
//  }
//  console.log(lcs(x,y, m, n, dp));


//bottom-up approach

function lcs(x, y, m , n){
    var l = new Array(n+1).fill(-1);
    var dp = new Array(m+1).fill(l);

    for (let i = 0; i <= m; i++) {
        dp[0][i] = 0
     }
     
     for (let j = 0; j <= n; j++) {
       dp[j][0] = 0;
     }
     
     for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(x[i-1] == y[j-1]){
                dp[i][j] = 1+ dp[i-1][j-1];
            }else{
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
            }
        }
    }
    return dp[m][n];

}
console.log(lcs(x,y, m, n));

