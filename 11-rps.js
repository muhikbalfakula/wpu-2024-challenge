// day 11/366
// link challenge: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

// cara 1
// const rps = (p1,p2) => {
//     if(p1 === p2) return "Draw!";
//     if (p1 === 'rock' && p2 === 'scissors'){
//         return 'Player 1 won!';
//     } else if (p1 === 'scissors' && p2 === 'paper'){
//         return 'Player 1 won!';
//     } else if (p1 === 'paper' && p2 === 'rock'){
//     return 'Player 1 won!';
//     } else {
//         return 'Player 2 won!';
//     }
// };

// cara 2
// const rps = (p1,p2) => {
//     if(p1 === p2) return "Draw!";
//     if ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')){
//         return 'Player 1 won!';
//     } else {
//         return 'Player 2 won!';
//     }
// };

// cara 3
const rps = (p1,p2) => {
    const rules = {
        rock: 'sissors',
        scissors: 'paper',
        paper: 'rock'
    };

    if (p1 === p2){
        return 'Draw!';
    } else {
        return `Player ${rules[p1] === p2 ? '1': '2'} won!`
    }
};



console.log(rps('rock', 'paper'));