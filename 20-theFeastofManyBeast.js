// day 20/366
// link challenge: 

// cara 1
// function feast(beast, dish){
//     return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1];
// }

// cara 2
// function feast(beast, dish){
//     return beast.at[0] === dish.at[0] && beast.at(-1) === dish.at(-1); 
// }

// cara 3
const feast = (beast, dish) => beast.at[0] === dish.at[0] && beast.at(-1) === dish.at(-1); 
console.log(feast("great blue heron", "garlic naan"));