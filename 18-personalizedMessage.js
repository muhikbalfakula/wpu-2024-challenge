// day 18/366
// link challenge: 

// cara 1
// function greet(name, owner){
//     if (name === owner) return 'Hello Boss';
//     if (name !== owner) return 'Hello guest';
// }

// cara 2
// function greet(name, owner){
//     return (name === owner) ? 'Hello Boss' : 'Hello Guest'};

// cara 3
const greet = (name, owner) => name === owner ? 'Hello Boss' : 'Hello Guest';
console.log(greet('Daniel', 'Daniel'))