/**
 * CodeWars Kata
 *
 * https://www.codewars.com/kata/517abf86da9663f1d2000003
 */

function toCamelCase(str = "") {
  str = str.replace(/\_/g, "-");

  const words = str.split("-");

  return words
    .map((word, i) => {
      if (i === 0) return word;

      const firstLetter = word.charAt(0);
      const restOfWord = word.slice(1);

      return `${firstLetter.toUpperCase()}${restOfWord.toLowerCase()}`;
    })
    .join("");
}

console.log(toCamelCase("the_stealth_warrior"));
