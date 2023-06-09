export const groupArrayElements = (array, numberOfGroups) => {
  if (!Array.isArray(array))
    throw "First parameter must be an array to be grouped.";
  if (!Number.isInteger(numberOfGroups))
    throw "Number of groups requested must be an integer value.";
  if (numberOfGroups <= 0)
    throw "Number of groups requested must be a positive integer value.";

  if (array.length === 0 || numberOfGroups === 1) return array;

  const groupSize = Math.ceil(array.length / numberOfGroups);

  const arraySlicer = (value, index) => {
    const startIndex = index * groupSize;
    return array.slice(startIndex, startIndex + groupSize);
  };

  return Array.from({ length: numberOfGroups }, arraySlicer);
};
