/**
 * CodeWars Kata
 *
 * https://www.codewars.com/kata/55d24f55d7dd296eb9000030
 */

function summation(num: number) {
  const numbers = [...Array(num).keys()].slice(1);
  numbers.push(num);

  let result = 0;

  numbers.forEach((number) => (result += number));

  return result;
}

console.log(summation(8));
