function main() {
  const startTime = Date.now();
  console.log(getCurrentTime());

  const array = Array.from(Array(1000000).keys());
  const searchFor = array[Math.round(Math.random() * array.length)];

  const wasFound = binarySearch(array, searchFor);

  console.log({ searchFor, wasFound });
  console.log(getCurrentTime());
  console.log(`Done in ${(Date.now() - startTime) / 1000}s`);
}

function binarySearch(array = [], searchFor = 1) {
  while (1 == 1) {
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
}

function getCurrentTime() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return `${hours}:${minutes}:${seconds}`;
}

main();
