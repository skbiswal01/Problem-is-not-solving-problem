let n = 7;
// let dp = new Array(n+1).fill(-1);
// function fib(n){
//     if(n==0 || n==1){
//         return n;
//     }
//     if(dp[n] != -1){
//         return dp[n]
//     }
//     return dp[n] = fib(n-1) + fib(n-2);
// }

// console.log(fib(n));

// //recusrsive solution 
// function fibo(n){
//     if(n==1 || n== 0){
//         return n;
//     }
//     return fibo(n-1) + fibo(n-2);
// }

function fib(n){
    let res = new Array(n+1).fill(-1);

    res[0] = 0;
    res[1] = 1;

    for(let i = 2; i <= n; i++){
        res[i] = fib(i-1) + fib(i - 2);
    }
    return res[n];
}

console.log(fib(n));