var hotpo = function(n, acc = 0) {
    if (n <= 1) {
      return acc;
    } else {
      return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
    }
  }




//   var hotpo = function(n){
//     var rs=0;
//     while (n>1){
//       rs++;
//       n=n%2?n*3+1:n/2;
//     }
//     return rs;
// }
