/**
 * Inspired by CodeWars
 *
 * https://www.codewars.com/kata/54e6533c92449cc251001667
 */

function uniqueInOrder(iterable) {
  const array = [...iterable];
  let last = "";

  return array
    .map((symbol, i) => {
      if (symbol === last) return;

      last = symbol;
      return symbol;
    })
    .filter(Boolean);
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
