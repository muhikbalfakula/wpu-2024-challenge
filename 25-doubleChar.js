// day 25/366
// link challenge: 

// cara 1
// function doubleChar(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++){
//         result += str[i];
//         result += str[i];
//     }
//     return result
// }

// cara 2
// function doubleChar(str) {
//     return [...str].map((el) => el + el).join('')
// }

// cara 3
const doubleChar = (str) => str.split('').map((el) => el + el).join('');

console.log(doubleChar("Adidas"));