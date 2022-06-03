let p = [10, 12, 28];
let w = [1, 2, 4];
let c = 1;
let n = p.length;

//recusrive solution
// function knap(p, w, c, n){
//     if(n == 0 || c==0){
//         return 0;
//     }
//     if(w[n-1] > c){
//         return knap(p, w, c, n-1);
//     }

//     return Math.max(p[n-1] + knap(p, w, c - w[n-1], n-1), knap(p, w, c, n-1))
// }

// console.log(knap(p, w, c, n));

// top dowm method
// var dp = [];
// var x = new Array(c + 1).fill(-1);
// for (let i = 0; i <= n; i++) {
//   dp.push(x);
// }

// function knap(p, w, c, n, dp){
//         if(n == 0 || c==0){
//             return 0;
//         }
//         if(dp[n][c] != -1){
//             return dp[n][c];
//         }
//         if(w[n-1] > c){
//             return dp[n][c] = knap(p, w, c, n-1, dp);
//         }

//         return dp[n][c] =  Math.max(p[n-1] + knap(p, w, c - w[n-1], n-1, dp), knap(p, w, c, n-1, dp))
//     }

//     console.log(knap(p, w, c, n, dp));

// Bottom up approach

function knap(p, w, c, n) {
  let dp = [];
  for (let i = 0; i <= n; i++) {
      let x = []
      for(let j = 0; j <= c; j++){
          x.push(-1);
      }
      dp.push(x)
  }
  

  for (let i = 0; i <= c; i++) {
     dp[0][i] = 0
  }
  
  for (let j = 0; j <= n; j++) {
    dp[j][0] = 0;
  }

 
  
   for(let i = 1; i <= n; i++){
       for(let j = 1; j <= c; j++){
           if(w[i-1] > j){
               dp[i][j] = dp[i-1][j];
           }else{
               dp[i][j] = Math.max(p[i-1] + dp[i-1][c-w[i-1]], dp[i-1][j])
           }
       }
   }
   return dp[n][c];
}

console.log(knap(p, w, c, n));
