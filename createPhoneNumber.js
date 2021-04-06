/**
 * Inspired by CodeWars
 *
 * https://www.codewars.com/kata/525f50e3b73515a6db000b83
 */

function createPhoneNumber(numbers) {
  const pattern = "(012) 345-6789";

  return pattern
    .split("")
    .map((symbol, i) => {
      if (Number.isInteger(+symbol) && symbol !== " ") {
        return numbers[parseInt(symbol)];
      }

      return symbol;
    })
    .join("");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
