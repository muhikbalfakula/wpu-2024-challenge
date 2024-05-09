// day 23/366
// link challenge: 

// cara 1
// function monkeyCount(n){
//     const result= [];
//     for (let i = 1; i <= n; i++) {
//         result.push(i);
//     }
//     return result;
// }

// cara 2
// function monkeyCount(n){
//     return Array.from({length : n}, (_, i) => i + 1);
// }

// cara 3
const monkeyCount = (n) => Array.from({length : n}, (_, i) => i + 1);

console.log(monkeyCount(10));