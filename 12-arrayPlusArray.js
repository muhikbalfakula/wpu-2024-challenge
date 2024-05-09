// day 12/366
// link challenge: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d


// cara 1
// function arrayPlusArray(arr1, arr2){
//     let total = 0;
//     for (let i = 0; i < arr1.length; i++){
//         total += arr1[i];
//     }
//     for (let i = 0; i < arr2.length; i++){
//         total += arr2[i];
//     }
//     return total;
// };

// cara 2 
// function arrayPlusArray(arr1, arr2){
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++){
//         for (let j = 0; j < arguments[i].length; j++){
//             total += arguments[i][j];
//         }
//     }
//     return total;
// };

// cara 3
function arrayPlusArray(arr1, arr2){  
    return [...arr1, ...arr2].reduce((acc, curr) => acc + curr);
};

console.log(arrayPlusArray([1,2,3], [4,5,6]));