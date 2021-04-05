/**
 * Inspired by FreeCodeCamp's challenge
 *
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
 */

const initialString = "_eye";

const result = isPalindrome(initialString);

console.log(result);

function isPalindrome(str = "") {
  str = sanitizeString(str);
  const array = str.split("");
  const reversedString = array.reverse().join("");

  if (reversedString === str) return true;

  return false;
}

function sanitizeString(str = "") {
  return str.replace(/[\W_]+/gi, "");
}
