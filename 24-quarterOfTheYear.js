// day 24/366
// link challenge: 

// cara 1
// const quarterOf = (month) => {
//     if (month <= 3) {
//         return 1;
//     } else if (month <= 6) {
//         return 2;
//     } else if (month <= 9) {
//         return 3;
//     } else {
//         return 4;
//     }
// }

// cara 2
// const quarterOf = (m) => m <= 3 ? 1 : m <= 6 ? 2 : m <= 9 ? 3 : 4;

// cara 3
const quarterOf = (month) => Math.ceil(month/3);

console.log(quarterOf(8));