// 7 / 366
// link challenge : https://www.codewars.com/kata/5513795bd3fafb56c200049e

// cara 1
// function countBy(x, n){
//     let z = [];
//     for(let i = 1; i <= n; i++){
//         z.push(i * x);
//     }

//     return z;
// }

// cara 2
// function countBy(x, n){
//     return [...Array(n)].map((el, i) => (i + 1) * x);
// }

// cara 3
const countBy = (x, n) => [...Array(n)].map((el, i) => (i + 1) * x);

console.log(countBy(2,5));
