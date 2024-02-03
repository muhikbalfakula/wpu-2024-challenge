// 5 / 366
// link challenge : https://www.codewars.com/kata/5861d28f124b35723e00005e

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft;
}

console.log(zeroFuel(50,25,2));