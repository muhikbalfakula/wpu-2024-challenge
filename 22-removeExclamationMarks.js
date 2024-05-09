// day 22/366
// link challenge: 

// cara 1
// function removeExclamationMarks(s){
//     let result = '';
//     for (let i = 0; i < s.length; i++){
//         if (s[i] !== '!'){
//             result += s[i]
//         }
//     }
//     return result;
// }

// cara 2
// function removeExclamationMarks(s){
//     return s.split('!').join('');  
// }

// cara 3
const removeExclamationMarks = (s) => s.split('!').join('');

console.log(removeExclamationMarks("Hello World!"))