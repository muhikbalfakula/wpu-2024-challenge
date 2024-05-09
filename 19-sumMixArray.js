// day 19/366
// link challenge: 

// cara 1
// function sumMix(x){
//     let total = 0;
//     for (let i = 0; i < x.length; i++){
//         total += +x[i];
//     }
//     return total;
// }

// cara 2
// function sumMix(x){
//     return x.reduce((acc, curr) => acc + +curr, 0);
// }

// cara 3
const sumMix = (x) => x.reduce((acc, curr) => acc + +curr, 0);

console.log(sumMix([9, 3, '7', '3']))