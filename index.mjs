import { groupArrayElements } from "./groupArrayElements.mjs";

const inputArray = [1, 2, 3, 4, 5];
const numberOfGroups = 3;

try {
  const groupedArray = groupArrayElements(inputArray, numberOfGroups);

  console.log(groupedArray); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
} catch (e) {
  console.log(`Ooops, something broke. Error: ${e}`);
}
