// day 27/366
// link challenge:

// cara 1
// function setAlarm (employed, vacation) {
//     if(employed) {
//         if(vacation) {
//             return false;
//         } else {
//             return true;
//         }
//     } else {
//         if(vacation) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }

// cara 2
// function setAlarm(employed, vacation) {
//   return employed && !vacation;
// }

// cara 3
const setAlarm = (e, v) => e && !v;

console.log(setAlarm(true, true));
