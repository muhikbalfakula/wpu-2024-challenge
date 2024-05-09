// day 26/366
// link challenge: 

// cara 1
// function updateLight (current) {
//     if (current === 'green'){
//         return 'yellow';
//     } else if (current === 'yellow'){
//         return 'red';
//     } else {
//         return 'green';
//     }
// }

// cara 2
// function updateLight(current) {
//     switch(current){
//         case 'green' : return 'yellow';
//         case 'yellow' : return ' red';
//         case 'red' : return 'green';
//     }
// }

// cara 3
// function updateLight(c) {
//     return c === 'green' ? 'yellow' : c === 'yellow' ? 'red' : 'green';
// }

// cara 4
const updateLight = (c) => (c === 'green' ? 'yellow' : c === 'yellow' ? 'red' : 'green');
console.log(updateLight("yellow"))