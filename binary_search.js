function main() {
  const startTime = performance.now();

  const array = Array.from(Array(100_000).keys());
  const searchFor = array[Math.round(Math.random() * array.length)];

  const wasFound = binarySearch(array, searchFor, elementsCount);

  console.log({ searchFor, wasFound });
  console.log(`Done in ${(performance.now() - startTime) / 1000}s`);
}

function binarySearch(array = [], searchFor = 1) {
  const element = array[Math.round(array.length / 2)];
  const index = array.findIndex((e) => e === element);

  if (!element) {
    return;
  }

  console.log(`Currently on ${element}`);

  if (element === searchFor) {
    return element;
  }

  if (element < searchFor) {
    const newArray = array.splice(index, array.length - 1);
    return binarySearch(newArray, searchFor);
  }

  if (element > searchFor) {
    const newArray = array.splice(0, index);
    return binarySearch(newArray, searchFor);
  }
}

function getCurrentTime() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return `${hours}:${minutes}:${seconds}`;
}

main();
