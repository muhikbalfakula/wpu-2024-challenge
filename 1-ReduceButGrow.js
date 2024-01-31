// cara satu
// function grow(x) {
//     let result = x[0];
//     for(let i = 1; i < x.length; i++){
//         result = result * x[i];
//     }
//     return result;
// }

// cara dua
// function grow(x){
//     const result = x.reduce((acc, curr) => acc * curr , 1)
//     return result;
// }

// console.log(grow([1,2,3,4,]));

// cara tiga
const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);

console.log(grow([1,2,3,4]));