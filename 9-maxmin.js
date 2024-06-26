// day 9/366
// link challenge: codewars.com/kata/577a98a6ae28071780000989

// 
// cara 1
// var min = function(list){
//     let minValue = list[0];
//     for(let i = 1; i < list.length; i++){
//         if (minValue > list[i]) {
//             minValue = list[i];
//         }
//     }
//     return minValue;
// }
// var max = function(list){
//     let maxValue = list[0];
//     for(let i = 1; i < list.length; i++){
//         if(maxValue < list[i]) {
//             maxValue = list[i];
//         }
//     }
//     return maxValue
// }

// cara 2
// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

// cara 3
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(max([-52, 56, 30, 29, -54, 0, -110]))