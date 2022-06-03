var arr = [1, 2, 3];
var n = 3;
var s = 3;
// function change(arr,n, s){
//     if(s == 0){
//                 return 1
//             }
//             if(n==0){
//                 return 0;
//             }
//             if(arr[n-1] > s){
//                 return change(arr, n-1, s)
//             }
        
//             return change(arr, n, s - arr[n-1]) + change(arr, n-1, s);
// }

//top-down method
// var x = new Array(s+1).fill(-1);
// var dp = new Array(n+1).fill(x);
// function change(arr, n, s, dp){
//     if(s == 0){
//                         return 1
//                     }
//                     if(n==0){
//                         return 0;
//                     }
//                     if(dp[n][s] != -1){
//                         return dp[n][s]
//                     }
//                     if(arr[n-1] > s){
//                         return change(arr, n-1, s, dp)
//                     }
                
//                     return dp[n][s] = change(arr, n, s - arr[n-1], dp) + change(arr, n-1, s, dp);
// }

// console.log(change(arr, n, s, dp))

//bottom-up method

function change(arr, n, s){
    var x = new Array(s+1).fill(-1);
    var dp = new Array(n+1).fill(x);

    for (let i = 0; i <= s; i++) {
        dp[0][i] = 0
     }
     
     for (let j = 0; j <= n; j++) {
       dp[j][0] = 1;
     }

     
     for(let i = 1; i <= n; i++){
        for(let j = 1; j <= s; j++){
            if(arr[i-1] > j){
                dp[i][j] = dp[i-1][j];
            }else{
                dp[i][j] = dp[i][s-arr[i-1]] + dp[i-1][j]
            }
        }
    }
    return dp[n][s];
    
}

console.log(change(arr, n, s))