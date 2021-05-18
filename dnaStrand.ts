/**
 * CodeWars Kata
 *
 * https://www.codewars.com/kata/554e4a2f232cdd87d9000038
 */

function dnaStrand(dna: string) {
  const lettersToSwap = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };

  return dna
    .split("")
    .map((letter) => lettersToSwap[letter as "A" | "T" | "G" | "C"])
    .join("");
}

console.log(dnaStrand("ATTGC"));
