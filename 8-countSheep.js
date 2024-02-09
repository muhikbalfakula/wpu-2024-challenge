// day 8/366
// link challenge: 

// cara 1
// var countSheep = function(num) {
//     result = '';
//     for(let i = 1; i <= num; i++){
//         result += i + ' sheep...';
//     }
//     return result
// }

// cara 2
// var countSheep = function(num){
//     return [...Array(num)].map((_,i) => `${i + 1} sheep...`).join('');
// }


// cara 3
const countSheep = (num) => [...Array(num)].map((_,i) => `${i + 1} sheep...`).join('');
console.log(countSheep(3));