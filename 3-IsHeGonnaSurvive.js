// cara 1
// function hero (bullets, dragons){
//     if (bullets/2 >= dragons) {
//         return true;
//     } else {
//         return false;
//     }
// }

// cara 2
// function hero(bullets, dragons){
//     return (bullets/2 >= dragons);
// }

// cara tiga
const hero = (b, d) => b/2 >= d;

console.log(hero(10,5));