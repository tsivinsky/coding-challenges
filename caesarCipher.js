/**
 * Inspired by FreeCodeCamp's challenge
 *
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
 */

const alphabet = [
  "",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const initialString = "FREE CODE CAMP";

const encodedResult = encode(initialString, -1);

const decodedResult = decode(encodedResult, -1);

console.log({
  initialString,
  encodedResult,
  decodedResult,
  isEqual: decodedResult === initialString,
});

function encode(str = "", shift = 1) {
  const array = str.split("");

  for (const [i, letter] of array.entries()) {
    if (!alphabet.includes(letter.toLowerCase())) {
      continue;
    }

    const indexInAlphabet = alphabet.findIndex(
      (l) => l === letter.toLowerCase()
    );

    // Get new index
    let newIndex = indexInAlphabet + shift;
    if (newIndex <= 0) {
      const diff = alphabet.length - 1 + newIndex;

      newIndex = diff;
    }
    if (alphabet.length <= newIndex) {
      const diff = newIndex - (alphabet.length - 1);

      newIndex = diff;
    }

    // Replace letter
    array[i] = isUpper(letter)
      ? alphabet[newIndex].toUpperCase()
      : alphabet[newIndex].toLowerCase();
  }

  return array.join("");
}

function decode(str = "", shift = 1) {
  const array = str.split("");

  for (const [i, letter] of array.entries()) {
    if (!alphabet.includes(letter.toLowerCase())) {
      continue;
    }

    const indexInAlphabet = alphabet.findIndex(
      (l) => l === letter.toLowerCase()
    );

    // Get new index
    let newIndex = indexInAlphabet - shift;
    if (newIndex <= 0) {
      const diff = alphabet.length - 1 + newIndex;

      newIndex = diff;
    }
    if (alphabet.length <= newIndex) {
      const diff = newIndex - (alphabet.length - 1);

      newIndex = diff;
    }

    // Replace letter
    array[i] = isUpper(letter)
      ? alphabet[newIndex].toUpperCase()
      : alphabet[newIndex].toLowerCase();
  }

  return array.join("");
}

function isUpper(str = "") {
  if (str === str.toUpperCase()) return true;

  return false;
}
