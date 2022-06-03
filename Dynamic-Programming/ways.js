let n = 3;

// recursive solution
// function ways(n){
//     if(n === 0){
//         return 1;
//     }
//     if(n < 0){
//         return 0
//     }

//     return ways(n-1) + ways(n-2) + ways(n-3);
// }

// console.log(ways(n));

//top down method
// let dp = new Array(n+1).fill(-1);
// function ways(n){
//     if(n === 0){
//         return 1;
//      }
//     if(n < 0){
//         return 0
//     }
//     if(dp[n] != -1){
//         return dp[n];
//     }

//     return dp[n] = ways(n-1) + ways(n-2) + ways(n-3);
// }

// console.log(ways(n));


//bottom up method
function ways(n){
    let dp = new Array(n+1).fill(-1);

    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for(let i = 3; i <= n ; i++){
        dp[i] = ways(i-1) + ways(i-2) + ways(i-3);
    }
    return dp[n];
}

console.log(ways(n));