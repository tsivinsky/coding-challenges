/**
 * CodeWars Kata
 *
 * https://www.codewars.com/kata/56747fd5cb988479af000028
 */

function getMiddle(s: string): string {
  if (s.length == 1 || s.length == 2) return s;

  const array = s.split("");
  array.pop();
  array.shift();

  return getMiddle(array.join(""));
}

console.log(getMiddle("test"));
