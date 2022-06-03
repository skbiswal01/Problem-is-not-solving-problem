var x  = [ 1, 2, 3, 1 , 6, 9];
var n = x.length;

//recursive approach + memoization
let dp = new Array(n+1).fill(-1);
function maxLoot(hval,n, dp)
{
    // base case
    if (n < 0) {
        return 0;
    }
    if (dp[n] != -1) {
        return dp[n];
    }
    if (n == 0) {
        return dp[n] = hval[0];
    }
   
    return  dp[n] = Math.max(hval[n] + maxLoot(hval, n - 2, dp), maxLoot(hval, n - 1, dp));
}

console.log(maxLoot(x,n-1, dp));

