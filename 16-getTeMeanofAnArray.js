// day 16/366
// link challenge: 

//  cara 1
// function getAverage(marks) {
//     let total = 0;
//     for(let i = 0; i < marks.length; i++){
//         total += marks[i];
//     }
//     return Math.floor(total/marks.length);
// }

// cara 2
const getAverage = (marks) => Math.floor(marks.reduce((acc,curr) => acc + curr, 0) / marks.length);


console.log(getAverage([1,2,3,4,5]));