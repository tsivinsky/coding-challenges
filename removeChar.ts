/**
 * Code Wars Kata
 *
 * https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
 */

function removeChar(str: string): string {
  return str.slice(1, str.length - 1);
}

console.log(removeChar("eloquent"));
