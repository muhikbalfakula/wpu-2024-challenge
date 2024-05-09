// day 21/366
// link challenge: 

// cara 1
// function rentalCarCost(d) {
//     let diskon = 0;
//     if (d >= 7){
//         diskon = 50;
//     } else if (d >= 3){
//         diskon = 20;
//     }
//     return d * 40 - diskon;
// }

// cara 2
// function rentalCarCost(d) {
//     return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
// }

// cara 3
const rentalCarCost = (d) => d*40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);

console.log(rentalCarCost(6))