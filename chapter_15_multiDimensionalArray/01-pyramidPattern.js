
n=123;

// for(let i=1;i<=n;i++) {
//     let row = "";
//     for(let j=1; j<= n-i; j++) {
//          row += " ";
//     }
//         for(let j=1; j<=2*i-1; j++) {
//           row = row + "*";
//         }
    
//     console.log(row)
// }

while (n== 0) { 
    let rem = n % 10;
    process.stdout.write(rem+"")
    n = n/ 10;
}