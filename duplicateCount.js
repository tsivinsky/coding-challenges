/**
 * Inspired by CodeWars
 *
 * https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
 */

function duplicateCount(text = "") {
  text = text.toLowerCase();

  const map = new Map();

  for (const symbol of text) {
    if (map.has(symbol)) {
      map.set(symbol, map.get(symbol) + 1);
    } else {
      map.set(symbol, 1);
    }
  }

  return [...map.values()].filter((i) => i > 1).length;
}

console.log(duplicateCount("aabbcde")); // 2
