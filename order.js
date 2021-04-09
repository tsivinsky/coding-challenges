/**
 * CodeWars Kata
 *
 * https://www.codewars.com/kata/55c45be3b2079eccff00010f
 */

function order(words = "") {
  const array = words.split(" ");
  let result = [""];

  for (const word of array) {
    const index = word.match(/[0-9]/);

    result[index] = word;
  }

  result.splice(0, 1);

  return result.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
