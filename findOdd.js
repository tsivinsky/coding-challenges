/**
 * CodeWars Kata
 *
 * https://www.codewars.com/kata/54da5a58ea159efa38000836
 */

// function findOdd(A = []) {
//   const numbers = new Map();

//   for (const number of A) {
//     if (numbers.has(number)) {
//       numbers.set(number, numbers.get(number) + 1);
//     } else {
//       numbers.set(number, 1);
//     }
//   }

//   for (const [number, count] of numbers) {
//     if (count % 2 !== 0) {
//       return number;
//     }
//   }

//   return 0;
// }

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
