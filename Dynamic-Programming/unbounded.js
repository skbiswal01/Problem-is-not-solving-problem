var val = [10, 40, 50, 70];
var wt = [1, 3, 4, 5];
var w = 8;
var n = wt.length;
// same as ks.js
var dp = [];
var x = new Array(w + 1).fill(-1);
for (let i = 0; i <= n; i++) {
  dp.push(x);
}


function knap(p, w, c, n, dp){
        if(n == 0 || c==0){
            return 0;
        }
        if(dp[n][c] != -1){
            return dp[n][c];
        }
        if(w[n-1] > c){
            return dp[n][c] = knap(p, w, c, n-1, dp);
        }

        return dp[n][c] =  Math.max(p[n-1] + knap(p, w, c - w[n-1], n, dp), knap(p, w, c, n-1, dp))
    }

    console.log(knap(val, wt, w, n, dp));