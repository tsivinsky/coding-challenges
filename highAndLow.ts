/**
 * CodeWars Kata
 *
 * https://www.codewars.com/kata/554b4ac871d6813a03000035
 */

function highAndLow(numbers: string) {
  const arrayOfNumbers = numbers.split(" ").map((num) => +num);

  return [Math.max(...arrayOfNumbers), Math.min(...arrayOfNumbers)].join(" ");
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
