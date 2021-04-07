/**
 * Inspired by CodeWars
 *
 * https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
 */

function findShort(s = "") {
  const words = s.split(" ").sort((a, b) => a.length - b.length);

  return words[0].length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
