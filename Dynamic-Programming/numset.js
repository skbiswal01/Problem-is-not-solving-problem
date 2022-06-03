var s = [6,2 , 5 ,1];
var n = 4;
var sum = 5;

// function subset(s,n, sum){
//     if(sum == 0){
//         return true
//     }
//     if(n==0){
//         return false;
//     }
//     if(s[n-1] > sum){
//         return subset(s, n-1, sum)
//     }

//     return subset(s, n-1, sum - s[n-1]) || subset(s, n-1, sum);
// }


//top-down approach
// var dp = [];
// var x = new Array(sum + 1).fill(-1);
// for (let i = 0; i <= n; i++) {
//   dp.push(x);
// }

// function subset(s,n, sum, dp){
//     if(sum == 0){
//         return true
//     }
//     if(n==0){
//         return false;
//     }
//     if(dp[n][sum] != -1){
//        return dp[n][sum];
//     }
//     if(s[n-1] > sum){
//         return subset(s, n-1, sum, dp)
//     }

//     return dp[n][sum] = subset(s, n-1, sum - s[n-1], dp) || subset(s, n-1, sum, dp);
// }


//Bottom-up Approach


function subset(s,n, sum){
    var x = new Array(sum+1).fill(-1);
    var dp = new Array(n+1).fill(x);
    
    for (let i = 0; i <= sum; i++) {
        dp[0][i] = 0
     }
     
     for (let j = 0; j <= n; j++) {
       dp[j][0] = 1;
     }
   
     for(let i = 1; i <= n; i++){
        for(let j = 1; j <= sum; j++){
            if(s[i-1] > j){
                dp[i][j] = dp[i-1][j];
            }else{
                dp[i][j] = dp[i-1][sum-s[i-1]] + dp[i-1][j]
            }
        }
    }
    return dp[n][sum];
}

console.log(subset(s, n, sum));




